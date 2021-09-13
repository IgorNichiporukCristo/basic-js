import { NotImplementedError } from '../extensions/index.js';

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
export default function getSeason(date) {
  if(date){
    if (!(date instanceof Date) || Object.keys(date).length){
      throw new Error('Invalid date!');
    } else {
      let arrMonth = ["spring", "summer", "autumn", "winter"];
      let arrDate = [[2, 3, 4], [5, 6, 7], [8, 9, 10], [11, 0, 1]];
      let res 
      let month = date.getMonth();
      arrDate.forEach((elem, index) => {
        if(elem.includes(month)){
          res = index
        }
      });return arrMonth[res]
      }
    }return "Unable to determine the time of year!"
  }
