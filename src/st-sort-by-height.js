import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let res = [];
  arr.forEach((el) => res.push(el));
  res.sort((a, b) => a - b);
  res = res.filter((a) => a > 0);
  arr.forEach((curr, index) => (curr === -1 ? res.splice(index, 0, -1) : null));
  return res;
}
