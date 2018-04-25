/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
const { getState, setState } = require('../store')


const add = (elmts) => {
  if (!(elmts instanceof Object)) {
    return false;
  }

  if (elmts.hasOwnProperty('id') 
      && elmts.hasOwnProperty('picture')
      && elmts.hasOwnProperty('caption')) {
      let tmp = {}
      let elmtWithIndex = elmts;
      elmtWithIndex.index = getState().pictures[getState().pictures.length - 1].index + 1;
      tmp.pictures = [...getState().pictures, elmtWithIndex]
    setState(tmp)
    return elmtWithIndex;
  }
  else {
    return false;
  }
};

module.exports = {
  add
};
