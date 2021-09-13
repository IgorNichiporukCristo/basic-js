import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let num = 9;
  let index = 0;
  let arr= String(n).split("");
  arr.forEach((elem, ind) => {
    elem <= num ? (num = elem, index = ind) : 0;
  })
  arr.splice(index, 1)
  return +arr.join("");
}
