let crypto = require('crypto');

function Ganratopt (length = 6) {
  let onetime = "";
  for(let i = 0; i<length; i++)
  {
    onetime += crypto.randomInt(0,10)
  }
  console.log(onetime);
  return onetime;
}
Ganratopt();
module.exports = Ganratopt;
