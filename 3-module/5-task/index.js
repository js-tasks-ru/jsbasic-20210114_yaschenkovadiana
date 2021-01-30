/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
	let arr = str.match(/[-]{0,1}[\d]*[\.]{0,1}[\d]+/g).map(Number);
  let result = {
    max: Math.max.apply(Math, arr),
    min: Math.min.apply(Math, arr),
  }
  return result;
}
