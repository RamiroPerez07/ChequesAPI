import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


const transporter = nodemailer.createTransport({
  service : "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: "gsngenericos@gmail.com",
    pass: process.env.MAILPASS,
  },
  from: "gsngenericos@gmail.com"
})

export const sendEmail = async (to: string, cod: string): Promise<void> => {
  const mailOptions = {
    from: '"Cheques GSN" gsngenericos@gmail.com',
    to,
    subject: "Codigo de verificación para Cheques GSN",
    text: `
      ¡Hola! Llegó tu código de verificación para Cheques GSN.
      El código es ${cod}
    `,
  }

  try {

    await transporter.sendMail(mailOptions);
    console.log("Correo electrónico enviado")
  
  } catch (error) {
    console.log("Error al enviar el correo electrónico: ", error)
  }
}