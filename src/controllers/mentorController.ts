import { Request, Response } from "express";
import { MentorService } from "../services/mentorService";

export class MentorController {
    private mentorService: MentorService;

    constructor() {
        this.mentorService = new MentorService();
    }

    async createMentor(req: Request, res: Response) {
        try {
            const { name, email } = req.body;
            const result = await this.mentorService.createMentor(name, email);

            res.status(201).json(result);
        } catch(error) {
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
}