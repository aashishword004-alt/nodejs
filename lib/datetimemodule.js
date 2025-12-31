function CurrentDate() {
    let currentdate = new Date();
    let today = currentdate.getDate() + '/' + (currentdate.getMonth() + 1) + '/' + currentdate.getFullYear();
    return today;
}

function Currentime() {
    let currentime = new Date();
    let hour = currentime.getHours();
    let ampm = "AM";
    if(hour > 12){
        hour = hour - 12;
        ampm = "PM";

    }

    let time =  hour + ':' +currentime.getMinutes() + ':' + ampm;
    return time;
}


module.exports.getDate = CurrentDate;
module.exports.getTime = Currentime;