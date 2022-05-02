const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dateobj) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //console.log(dateobj.getFullYear());
  if (!dateobj) { return 'Unable to determine the time of year!' } // OK

  //if (!(typeof dateobj.getMonth() === 'function')) {  throw new Error("Invalid date!")} // OK

  if (isNaN(dateobj)) {  throw new Error("Invalid date!") }
  // if (dateobj.getFullYear() < 0) { throw new Error("Invalid date!")}
  // if (!(typeof dateobj.getFullYear() === 'number' )) { throw new Error("Invalid date!") }
  // if (!(Object.prototype.toString.call(dateobj) === '[object Date]')) { throw new Error("Invalid date!") }
  // if (!(dateobj instanceof Date && !isNaN(dateobj))) { throw new Error("Invalid date!") }
  if (!(dateobj instanceof Date)) { throw new Error("Invalid date!") }

  // if ( !( dateobj.getFullYear() ) ) { throw new Error("Invalid date!") }
  if (!(typeof dateobj === 'object')) { throw new Error("Invalid date!") } // OK
  if (!(typeof dateobj.getMonth === 'function')) { throw new Error("Invalid date!") } // OK
  if (!(typeof dateobj.getFullYear === 'function')) { throw new Error("Invalid date!") } // OK
  if (dateobj.getDate === 'undefined') { throw new Error("Invalid date!") } // OK
  if (!(typeof dateobj.getFullYear() === 'number')) { throw new Error("Invalid date!") } // OK



  let season = '';
  let month = dateobj.getMonth();
 
  if (month == 0 || month == 1 || month == 11) {
    season = 'winter';
  } else if (month > 1 && month < 5) {
    season = 'spring';
  } else if (month >= 5 && month < 8) {
    season = 'summer';
  } else if (month >= 8 && month < 11) { 
    season = 'autumn';
  } 

  if (season) { return season }

  //return season;
}

module.exports = {
  getSeason
};
