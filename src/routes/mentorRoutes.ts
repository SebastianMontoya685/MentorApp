import { Router } from "express";
import { MentorController } from "../controllers/mentorController";

const router = Router();
const mentorController = new MentorController();

router.post('/', (req, res) => mentorController.createMentor(req, res));

export default router;