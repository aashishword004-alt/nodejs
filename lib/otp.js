function opt (length = 11) {
    let numbers = "0123456789";

  let onetime = "";
  for(let i = 0; i<length; i++)
  {
    onetime += numbers[Math.floor(Math.random () *numbers.length )]
  }
  return onetime;
}

module.exports = opt;
