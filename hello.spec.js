const hello = require('./hello')

test('hello', () => {
  //Arrange
  let name = 'Su'

  //Act
  let result = hello(name)

  //Assert
  expect(result).toBe('Hello Su')
})
