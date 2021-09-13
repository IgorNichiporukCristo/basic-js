import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],


  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`( ${String(value)} )`);
    return this;
  },

  removeLink(position) {
    position = position - 1;
     if(typeof position !== 'number' || !(0 <= position && position < this.arr.length)){
      this.arr = [];
       throw new Error(`You can't remove incorrect link!`);
     } else{
         this.arr.splice(position, 1);
         return this;
     }
 },

  reverseChain() {
    this.arr.reverse();
    return this;
  },
  
  finishChain() {
    let res =  this.arr.join("~~");
    this.arr = [];
    return res;
  }
};
