import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const result = [];
  matrix.forEach((elem, index) => {
    let count = 0;
    const subArray = [];
    elem.forEach((elem1, subindex) => {
      count = 0;
      if (matrix[index - 1] !== undefined) {
        if (matrix[index - 1][subindex - 1] === true) {
          count++;
        }
        if (matrix[index - 1][subindex] === true) {
          count++;
        }
        if (matrix[index - 1][subindex + 1] === true) {
          count++;
        }
      }
      if (matrix[index + 1] !== undefined) {
        if (matrix[index + 1][subindex - 1] === true) {
          count++;
        }
        if (matrix[index + 1][subindex] === true) {
          count++;
        }
        if (matrix[index + 1][subindex + 1] === true) {
          count++;
        }
      }
      if (matrix[index][subindex - 1] === true) {
        count++;
      }
      if (matrix[index][subindex + 1] === true) {
        count++;
      }
      subArray.push(count);
    }); result.push(subArray);
  }); return result;
}
