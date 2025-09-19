function Prinsdate () {
    let data = new Date();
    let today = data.getDate() + '/' + (data.getMonth()+1) + '/' + data.getFullYear();
    console.log(today);
}
 Prinsdate()