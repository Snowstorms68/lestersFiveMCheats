import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mrdmapupyflmdmakalyl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1yZG1hcHVweWZsbWRtYWthbHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNTI4NzUsImV4cCI6MTk2MzYyODg3NX0.lTwRbbIFdKwY5IZ4Ksj-n4Aew9FIpazHAjUN5afCHSc"
);
