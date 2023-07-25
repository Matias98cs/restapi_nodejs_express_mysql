import { getConnection } from "./../database/database";

const getLanguages = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language"
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getLanguage = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id, name, programmers FROM language WHERE id = ?",
      id
    );
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addLanguage = async (req, res) => {
  const { name, programmers } = req.body;
  try {
    if (name === undefined || programmers === undefined) {
      return res
        .status(404)
        .json({ message: "Bad request, please fill all field." });
    }
    const language = { name, programmers };
    const connection = await getConnection();
    await connection.query("INSERT INTO language SET ?", language);
    res.status(200).json({ message: "Language add successfully" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const updateLanguage = async (req, res) => {
  const { name, programmers } = req.body;
  const { id } = req.params;
  console.log(`id: ${id} name: ${name} programmers: ${programmers}`);
  try {
    if (id === undefined || name === undefined || programmers === undefined) {
      return res
        .status(404)
        .json({ message: "Bad request, please fill all field." });
    }
    const language = { name, programmers };
    const connection = await getConnection();
    await connection.query("UPDATE language SET ? WHERE id = ?", [
      language,
      id,
    ]);
    res.status(200).json({ message: "Language updated successfully" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const deleteLanguage = async (req, res) => {
  const { id } = req.params;
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "DELETE FROM language WHERE id = ?",
      id
    );
    res.json({ message: "Deleted language" });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
  getLanguages,
  addLanguage,
  getLanguage,
  deleteLanguage,
  updateLanguage,
};
