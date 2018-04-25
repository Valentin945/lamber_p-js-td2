const data = require("./fixtures");

let state = data;

const getState = () => state;
const setState = newState => (state = newState);

module.exports = {
  getState,
  setState
};
