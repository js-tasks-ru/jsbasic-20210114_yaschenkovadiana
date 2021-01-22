/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let NewStr = str.toLowerCase();
  return NewStr.includes('1xBet'.toLowerCase()) || NewStr.includes('XXX'.toLowerCase())); 
 }
