var fs = require('fs');
function LogError(description, error) {

    const now = new Date();

    const dd = now.getDate().toString().padStart(2, '0');
    const mm = (now.getMonth() + 1).toString().padStart(2, '0');
    const yy = now.getFullYear().toString().slice(-2);

    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hh = hours.toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    const ss = now.getSeconds().toString().padStart(2, '0');

    const time = `${dd}-${mm}-${yy} ${hh}:${min}:${ss} ${ampm}`;

    var content = `Info = ${description} has error at ${time}, Code = ${error.code} Error No ${error.errno} sql = ${error.sql} message ${error.sqlMessage}`;
    fs.appendFile('errorCode.log', "\n" + content, function (error) {

    });
}
module.exports.LogError = LogError;