import { Router } from "express";
import { MentorController } from "../controllers/mentorController";

const router = Router();
const mentorService = new MentorService();

router.post('/mentors', (req, res) => mentorController.createMentor(req, res));

export default router;