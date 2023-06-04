const { port, server } = require('.')

describe('Application', () => {
  test('Port', () => {
    expect(process.env.PORT).not.toBeUndefined()
    expect(port).toEqual(8000)
  })
})
