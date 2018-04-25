/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/

const { getState, setState } = require('../store')
const { remove } = require('./remove')
const { get } = require('./get')

const update = (elmt) => {
  var tmp = {
    pictures: getState().pictures
  }
  const index = tmp.pictures.findIndex((e) => {
    return e.title === elmt.title
  })
  if (index !== -1) {
    console.log(index)
    tmp.pictures.splice(index, 1, elmt)
    setState(tmp)
  }
};

module.exports = {
  update
};
