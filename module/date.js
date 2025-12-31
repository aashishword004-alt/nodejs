function CurrentDate() {
    let currentdate = new Date();
    let today = currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + '/' + currentdate.getFullYear();
    return today;
}
function getTime()
{

let currentime = new Date();
let time = currentime.getHours() + ':' + currentime.getMinutes() + ':' + currentime.getSeconds();
return time;
}

module.exports={CurrentDate,getTime};