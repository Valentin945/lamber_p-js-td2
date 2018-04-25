const { add } = require('./add')
const { list } = require('./list')

describe('Add in list test suit', () => {
  test('Add a Single element in the list', () => {
    const addElement = {
      shape: 'square',
      width: '200px',
      height: '100px',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG/1200px-Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG',
      title: 'University'
    }
    const element = list().length
    add(addElement)
    expect(list().length).toBe(element + 1)
  })

  test('Add a List of 2 elements in the list', () => {
    const addElements = [
      {
        shape: 'square',
        width: '300px',
        height: '150px',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG/1200px-Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG',
        title: 'DUT'
      },
      {
        shape: 'square',
        width: '200px',
        height: '100px',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG/1200px-Lyc%C3%A9e_Marlioz_-_Aix-les-Bains.JPG',
        title: 'Business School'
      }
    ]
    const element = list().length
    add(addElements)
    expect(list().length).toBe(element + addElements.length)
  })
})
