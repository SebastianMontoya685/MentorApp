import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || 'https://qcajolzpysvbgzlqtjwg.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjYWpvbHpweXN2Ymd6bHF0andnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNzM4MTksImV4cCI6MjA2NzY0OTgxOX0.gSHebDSxRk6XM8R0KUpdEMU-EYdSa3cCfsTzFoR9bBo'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)