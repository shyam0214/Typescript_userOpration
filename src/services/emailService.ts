import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendResetEmail = async (email: string, token: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let html = `<p>Click <a href="http://localhost:${process.env.PORT}/reset/${token}">here</a> to reset your password.</p>`;
  console.log(html)
  await transporter.sendMail({
    from: process.env.EMAIL,
    to: email,
    subject: 'Password Reset',
    html:html
  });
};

export default sendResetEmail;