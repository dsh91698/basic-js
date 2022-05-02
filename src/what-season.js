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
  if (!dateobj) { return 'Unable to determine the time of year!' }

  if (isNaN(dateobj)) {  return "Invalid date!" }
  if (dateobj.getFullYear() < 0) { return "Invalid date!" }
  if (!(typeof dateobj.getFullYear() === 'number' )) { return "Invalid date!" }
  if (!(Object.prototype.toString.call(dateobj) === '[object Date]')) { return "Invalid date!" }
  if (!(dateobj instanceof Date && !isNaN(dateobj))) { return "Invalid date!" }
  if ( !( dateobj.getFullYear() ) ) { return "Invalid date!" }

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
  } else {
    season = 'winter';
  }

  if (season) { return season }
  //return season;
}

module.exports = {
  getSeason
};
