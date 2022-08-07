// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require("nodemailer");
export default function handler(req, res) {
  console.log(req.body.id);
  const data = req.body;
  sendEmail(data.values, res);
}
const sendEmail = async (data, res) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
      user: "gangplank1432@gmail.com", // generated ethereal user
      pass: "vjdhxlojxwvkmeyv", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: "gangplank1432@gmail.com",
    to: "bajwaghazanfar9@gmail.com", // list of receivers
    subject: "New customer ✔", // Subject line
    html: `<h2>First name:${data.firstName}</h2>
    <h2>"Last name :"${data.lastName}</h2>
    <h2>"Email address :"${data.emailAddress}</h2>
    <h2>"Mobile Number :"${data.mobileNumber}</h2>
    <h2>"Subject :"${data.subject}</h2>
    <h2>"Message :"${data.message}</h2>
    
    
    `, // html body
  });
  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  res.status(200).json({ ok: true });
};
