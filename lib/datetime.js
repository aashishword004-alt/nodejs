function CurrentDate() {
    let currentdate = new Date();
    let today = currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + '/' + currentdate.getFullYear();
    return today;
}

function Currentime() {
    let currentime = new Date();
   // let ampm = currentime >=12 ? 'PM' : "AM"
    let time = currentime.getHours() + ':' + currentime.getminutes() + ':' + currentime.getSeconds();
    return time;
}


module.exports.getDate = CurrentDate;
module.exports.getTime = Currentime;