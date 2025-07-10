import { MentorModel } from "../models/mentorModel";

export class MentorService {
    private mentorModel: MentorModel;

    constructor() {
        this.mentorModel = new MentorModel();
    }

    async createMentor(name: string, email: string) {

        // Checking if a valid name and valid email are provided.
        if (!name || !email) {
            throw new Error('Name and Email are required');
        }

        if (name.trim().length === 0) {
            throw new Error('Name is required');
        }

        if (!email.includes('@')) {
            throw new Error('Valid email is required');
        }

        // Cleaning the name and email.
        const cleanName = name.trim();
        const cleanEmail = email.trim();


        // Creating the mentor.
        try {
            const mentor = await this.mentorModel.createMentor(cleanName, cleanEmail);
            return {
                success: true,
                message: 'Mentor created successfully',
                data: mentor
            }
        } catch(error) {
            throw error;
        }
    }
}
