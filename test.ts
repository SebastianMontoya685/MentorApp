import { insertMentor } from './src/database/queries/mentorQueries'

async function testInsert() {
  try {
    console.log('Testing mentor insertion...')
    
    const result = await insertMentor('John Doe', 'john@example.com')
    
    console.log('Success! Inserted mentor:', result)
  } catch (error) {
    console.error('Error:', error)
  }
}

testInsert() 