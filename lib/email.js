const nodemailer = require("nodemailer");

async function sendRecoveryEmail(toEmail,message) {


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
    html: message
        
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log('Password Sent Successfully');
    return ; // VERY IMPORTANT
  }
  catch (err) {
    if (err) {
      console.log("Faild to send Otp" + err)
    }

  }


}
sendRecoveryEmail("aashishparmar0707@gmail.com")

module.exports.emailSend = sendRecoveryEmail;
