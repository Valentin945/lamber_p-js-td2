/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const { getState } = require('../store');

const get = (cursor, amount) => {
  const tmpList = [...getState().pictures];
  const sizeList = tmpList.length
  
  let pos = cursor || 0
  
  if (!tmpList[pos])
  {
    return null
  }
  let res = [];
  let realAmount = 0
  if (tmpList.length - pos >= amount)
  {
    realAmount = amount
  }
  else
  { 
    realAmount = tmpList.length - pos
  }
  res = tmpList.slice(pos, pos + realAmount)
  return res;
};

module.exports = {
  get
};
