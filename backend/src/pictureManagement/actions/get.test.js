const {list} = require('./list')
const {get} = require('./get')

describe('Get in the list test suit', () => {
  test('Get a real element of the list', () => {
    expect(get('epita')).not.toBeNull();
  })

  test('Get a fake element of the list', () => {
    expect(get('rocket')).toBeNull();
  })
})