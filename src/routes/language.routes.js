import { Router } from "express";
import { methods as languagesController } from "../controllers/language.controller";

const router = Router();

router.get("/", languagesController.getLanguages);
router.get("/:id", languagesController.getLanguage);
router.post("/", languagesController.addLanguage);
router.put("/:id", languagesController.updateLanguage);
router.delete("/:id", languagesController.deleteLanguage);

export default router;
