const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let teamName = '';
  let arr = [];
  if (!members) { return false } 
  if (members.length < 0) { return false }
  //console.log('members', members)
  for (let i = 0; i < members.length; i++) {
    
    if (typeof members[i] === 'string') {// check for name type

      arr.push(members[i].trim()[0].toUpperCase()); // trim spaces, get first letter to uppercase
    }
  }
  arr.sort(); //sort by ABC
  return arr.join('');
}

module.exports = {
  createDreamTeam
};
