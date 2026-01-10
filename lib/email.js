const nodemailer = require("nodemailer");
const generateOtp = require("./otp");

async function sendRecoveryEmail(toEmail) {

  const otp = generateOtp(4);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aashishword004@gmail.com", // eamil mantion 
      pass: "imat knrx khmy eftw"  // app password
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "Recover Password",
    html: `
            <p>Hello,</p>
            <p>This message is for recovering your password.</p>
            <h3>Your OTP is <strong>${otp}</strong></h3>
            <p>Do not share this OTP.</p>
        `
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('otp Sent Successfully');
    return otp; // VERY IMPORTANT
  }
  catch (err) {
    if (err) {
      console.log("Faild to send Otp" + err)
    }

  }


}
sendRecoveryEmail("aashishparmar0707@gmail.com")

module.exports = sendRecoveryEmail;
