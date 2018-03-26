//Validate US Telephone Numbers
//Return true if the passed string is a valid US phone number.
function telephoneCheck(str) {
  

  return /^((1\s?)?(\([0-9]{3}\)|([0-9]{3}))[\s\-]?([0-9]{3})[\s\-]?([0-9]{4}))$/.test(str);
  
  
}



telephoneCheck("555-555-5555");