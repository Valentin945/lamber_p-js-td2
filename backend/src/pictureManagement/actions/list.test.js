const { getState } = require('../store');
const { list } = require('./list');

describe('Test the list itself', () => {
  test('Test if the list is the same as the one returned in getState', () => {
    expect(list()).toEqual(getState().pictures);
  })
})