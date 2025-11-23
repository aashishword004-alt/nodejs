const nodemailer = require("nodemailer");


   async function SendEmail(){

    let transporter = nodemailer.createTransport({
        service : "gmail",
        auth :{
             user : "aashishword004@gmail.com", // eamil mantion 
             pass : "imat knrx khmy eftw"  // app password 
        }
    });
    let info = {
        from : "aashishword004@gmail.com",
        to : "aashishparmar0707@gmail.com",
        subject : "Testing Email",
        text :"Hello this is test email from nodmailer",


      attechments : [
        {
            filename : "mystory.txt",
            path : " ./mystory.txt"
        }
      ]

    };
  try{

      let result = await transporter.sendMail(info); 
      console.log("Email sent successfullt" , result);

    } catch(err){
        console.error("Email sending failed", err);
    };


}
SendEmail();
