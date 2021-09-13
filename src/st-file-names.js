import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  names.forEach((elem, index, array) => {
    let count = 1;
    array.forEach((elem1, index1) => {
      if (elem === elem1 && index < index1) {      
        array[index1] = `${array[index1]}(${count})`;
        count++;
      }
    });
  });
  return names;
}
