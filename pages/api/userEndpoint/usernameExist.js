import { supabase } from "../../../lib/supabase";

async function checkIfUsernameExits(username) {
  const { data, error } = await supabase
    .from("user")
    .select()
    .match({ username: username });
  return { data };
}

export default async function handler(req, res) {
  const username = req.body.username;
  let { data } = await checkIfUsernameExits(username);
  res.status(200).send(data);
}
