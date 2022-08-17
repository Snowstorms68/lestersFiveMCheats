import { supabase } from "../../../lib/supabase";

async function checkIfEmailExits(email) {
  const { data, error } = await supabase
    .from("user")
    .select()
    .match({ email: email });
  return { data };
}

export default async function handler(req, res) {
  const email = req.body.email;
  let { data } = await checkIfEmailExits(email);
  res.status(200).send(data);
}
