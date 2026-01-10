const nodemailer = require("nodemailer");
let otp = require('./securityy')

async function SendEmail() {

  let Sendotpis = otp.Ganratopt(4);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aashishword004@gmail.com", // eamil mantion 
      pass: "imat knrx khmy eftw"  // app password 
    }
  });
  let info = {

    from: "aashishword004@gmail.com",
    to: "aashishparmar0707@gmail.com",
    subject: "Recover Password",
    html: `<p>Hello,</p>
  <p>This message is for recovering your password.</p>
  <p>The OTP is <strong>${Sendotpis}</strong></p>
  <p>Do not share this OTP for security purposes.</p>`

  };
  try {

    // snedMail is a inbuild function to send a email.
    let result = await transporter.sendMail(info);
    console.log("Email sent successfullt", result);

  } catch (err) {
    console.error("Email sending failed", err);
  };


}
SendEmail();
 module.exports.sendMail = SendEmail()
