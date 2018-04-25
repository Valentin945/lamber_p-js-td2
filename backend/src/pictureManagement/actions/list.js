/* FIXME:
*
* export a function that returns all the current elements from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
const { getState } = require('../store');

const list = () => {
  return [...getState().pictures];
};

module.exports = {
  list
};
