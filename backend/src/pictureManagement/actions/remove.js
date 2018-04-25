/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/

const {getState, setState} = require('../store')

const remove = (id) => {
  let tmplength = getState().pictures.length
  const res = {
    pictures: [...getState().pictures].filter( x => x.index !== id)
  }
  setState(res)
  if (res.pictures.length == tmplength)
  {
    return false
  }
  return true;
};

module.exports = {
  remove
};
