const { list } = require('./list');
const { remove } = require('./remove');

describe('Test the remove function of the list', () => {
  test('Try to remove a right element', () => {
    const element = list().length
    remove('epita')
    expect(list().length).toBe(element - 1)
  })

  test('Try to remove a fake element', () => {
    const element = list().length
    remove('epitarder')
    expect(list().length).toBe(element)
  })
})