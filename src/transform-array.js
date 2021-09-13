import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  let arrAccum = [];
  let i = 0;
  let dateNow = Date.now();
  if (!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!");
  } else {
    while(arr.length > i){
      switch(arr[i]) {
        case "--discard-next":
          arrAccum.push(dateNow);
           i = i + 2;
          break;
        case "--discard-prev":
          if (arrAccum.length > 0){
            arrAccum.pop();
            i++;
          }else{
            i++;
          }
          break;
        case "--double-next":
          if(i+1 < arr.length){
            arrAccum.push(arr[i + 1])
            i++;
          } else {
            i++;
          }
          break;
        case "--double-prev":
          if (arrAccum.length > 0){
          arrAccum.push(arrAccum[arrAccum.length -1]);
          i++;
          }else {
            i++;
          }
          break;
        default:
            arrAccum.push(arr[i])
            i++;
          break;
      } 
  }
  return arrAccum.filter((el)=> el !== dateNow)
  }
}
