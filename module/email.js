function Sendemail(reciver,subject,info)
{
    this.reciv=reciver;
    this.sub=subject;
    this.inf=info;
    let Send = function (){
        console.log('Hiyy I am Ashis ', reciver);
        console.log('what going on ', subject);
        console.log('tacke your your health ', info);
    }
}
module.exports={Sendemail};