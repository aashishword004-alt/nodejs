let dollarRate = 84;
let poundRate = 102;
let euroRate = 90;

function Doller (rupees) {

 return rupees / dollarRate;

}

function Pound (rupees){
    return rupees / poundRate;
}

function Euro (rupees){
    return rupees / euroRate;
}

module.exports.doll = Doller;
module.exports.pd = Pound;
module.exports.ero = Euro;