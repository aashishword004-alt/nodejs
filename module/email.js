
function Email(rec,sub,mess){
    this.rec=rec;
    this.sub=sub;
    this.mess=mess;

    this.Send = function()
    {
        console.log("Reciver: " + this.rec);
        console.log("Subject: " + this.sub);
        console.log("Message: " + this.mess);
    };


}
module.exports={Email};