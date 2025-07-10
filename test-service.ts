import { MentorService } from './src/services/mentorService'
// This demonstrates the correct architecture:
// Service → Model → Database Queries

async function testService() {
  const mentorService = new MentorService()
  
  try {
    console.log('=== Testing Service Layer ===')
    
    // Test 1: Valid data
    console.log('\n1. Testing valid mentor creation...')
    const result1 = await mentorService.createMentor('Jane Smith', 'jane@example.com')
    console.log('✅ Success:', result1)
    
    // Test 2: Invalid email
    console.log('\n2. Testing invalid email...')
    try {
      await mentorService.createMentor('Invalid User', 'invalid-email')
    } catch (error) {
      console.log('❌ Expected error caught:', error.message)
    }
    
    // Test 3: Empty name
    console.log('\n3. Testing empty name...')
    try {
      await mentorService.createMentor('', 'valid@email.com')
    } catch (error) {
      console.log('❌ Expected error caught:', error.message)
    }
    
    // Test 4: Data cleaning (uppercase email)
    console.log('\n4. Testing data cleaning...')
    const result4 = await mentorService.createMentor('  Bob Johnson  ', 'BOB@EXAMPLE.COM  ')
    console.log('✅ Data cleaned:', result4)
    
  } catch (error) {
    console.error('❌ Unexpected error:', error)
  }
}

testService() 