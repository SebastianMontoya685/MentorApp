import { insertMentor } from "../database/queries/mentorQueries";

export async function createMentor(name: string, email: string) {
    try {
        const mentor = await insertMentor(name, email);
        return mentor;
    } catch(error) {
        throw error;
    }
}