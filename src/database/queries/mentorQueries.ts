import { supabase } from "../../config/supabase";

// Function to insert mentor.
export async function insertMentor(name: string, email: string) {
    try {
        const {data, error} = await supabase.rpc('insert_mentor', {
            mentor_name: name,
            mentor_email: email
        });

        if (error) {
            throw new Error(`There was an error with inserting into the table, ${error.message}`);
        }
        
        return data;
    } catch(error) {
        throw error;
    }
    
}
