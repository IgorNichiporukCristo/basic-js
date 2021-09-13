import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(boolean) {
    this.boolean = boolean;
  }
  
  encrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let resStr = "";
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let i = 0;
    while (i < message.length){
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i)<= 90) {
        resStr += String.fromCharCode(((message.charCodeAt(i) - 65 + key.charCodeAt(count % key.length) - 65) % 26) + 65);
        count++;
      } else {
        resStr += message[i];
      }
      i++
    }
    if (this.boolean == false){
      return resStr.split("").reverse().join("");
    } else{
      return resStr;
    }
  }    
  decrypt(message, key) {
    if(!message || !key){
      throw new Error('Incorrect arguments!');
    }
    let resStr = "";
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let i = 0;
    while (i < message.length){
      if (65 <= message.charCodeAt(i) && message.charCodeAt(i)<= 90) {
        resStr += String.fromCharCode(((message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) % 26) + 65);
        count++;
      } else {
        resStr += message[i];
      }
      i++
    }
    if (this.boolean == false){
      return resStr.split("").reverse().join("");
    } else{
      return resStr;
    }
  }
}
