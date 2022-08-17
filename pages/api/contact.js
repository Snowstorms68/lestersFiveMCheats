export default async function (req, res) {
  const PASSWORD = process.env.mailPassword;
  const data = req.body;
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.ambitive.de",
    auth: {
      user: "a.haerdrich@ambitive.de",
      pass: PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: data.from_mail,
    to: "snowstorms.services@gmail.com",
    subject: "Kontaktanfrage Website",
    text: data.from_message,
    html: `<h1> ${data.from_name}</h1><p> Message: ${data.from_message}</p>
    <p> E-Mail: ${data.from_mail}</p>
    <p> Tel: ${data.from_tel}</p>`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
}
