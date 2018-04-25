const { list } = require('./list');
const { update } = require('./update');

describe('Test the update function of the list', () => {
  test('Try to update the epita title element', () => {
    const element = JSON.stringify(list())
    const updateElements =
      {
        shape: 'square',
        width: '100px',
        height: '100px',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG/1200px-Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG',
        title: 'epita'
      }
    update(updateElements)
    expect(JSON.stringify(list())).not.toEqual(element)
  })

  test('Try to update the fake element', () => {
    const element = JSON.stringify(list())
    const updateElements =
      {
        shape: 'square',
        width: '100px',
        height: '100px',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG/1200px-Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG',
        title: 'fakeElement'
      }
    update(updateElements)
    expect(JSON.stringify(list())).toEqual(element)
  })
})