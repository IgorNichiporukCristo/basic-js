import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  let newStr = "";
  let repeat = 1;
  let reteatAddition = 1;
  let add ="";

  if(options.additionRepeatTimes > 1){
    while(options.additionRepeatTimes >= reteatAddition ){
      if(options.additionRepeatTimes > reteatAddition){
        add += `${options.addition}${options.additionSeparator || "|"}`
      }else{
        add += `${options.addition}`
      }
      reteatAddition++
    }
  }
  while(options.repeatTimes >= repeat){
   if(options.repeatTimes > repeat){
        newStr +=`${str}${add || options.addition || ""}${options.separator || "+"}`
    } else {
      newStr +=`${str}${add || options.addition || ""}`
    }
    repeat++
  }
  if(!options.repeatTimes){
    newStr += `${str}${options.addition || ""}`
  }                
  return newStr
}
