import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const resObj = {};
  domains.forEach((element) => {
    const arr = element.split('.');
    arr.forEach((element1, index) => {
      const per = `.${arr.slice(index).reverse().join('.')}`;
      const count = 1;
      if (resObj[per]) {
        resObj[per]++;
      } else {
        resObj[per] = count;
      }
    });
  });
  return resObj;
}
