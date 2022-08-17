import { supabase } from "../../../lib/supabase";

async function registerUser(user) {
  const { data, error } = await supabase
    .from("user")
    .insert([
      { username: user.username, email: user.email, password: user.password },
    ]);
  console.log(data);
  return { data };
}

export default async function handler(req, res) {
  const user = req.body.user;
  let { data } = await registerUser(user);
  res.status(200).send(data);
}
