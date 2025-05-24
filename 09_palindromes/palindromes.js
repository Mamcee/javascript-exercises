const palindromes = function (str) {
const cleanstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversestr = cleanstr.split(''). reverse(). join('');
  return cleanstr === reversestr;
};

// Do not edit below this line
module.exports = palindromes;
  
