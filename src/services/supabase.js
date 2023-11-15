import { createClient } from "@supabase/supabase-js";

const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdmNjdXpsaWFyaGlydWFieXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc5Njg2MDQsImV4cCI6MjAxMzU0NDYwNH0.E_4bY5hlYS1dODA7qbIue4p_kG8lk90etRoLmxJ1SL4";
export const supabaseUrl = "https://lavccuzliarhiruabywq.supabase.co";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
