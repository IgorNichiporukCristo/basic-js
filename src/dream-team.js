import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  if (typeof members == "object" && members && members.length){
    let arr = [];
    arr = members.filter((el) => typeof el == "string");
    arr = arr.reduce((accum, value) => {
        let valueTrim = value.trim();
        accum.push(valueTrim[0]);
        return accum;
    }, [])
    return arr.join("").toUpperCase().split("").sort().join("");
  }else{
  return false
}
}
