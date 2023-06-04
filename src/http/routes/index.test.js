const router = require('./index')

describe('Router', () => {
  test('Routes should be more than or equal one', () => {
    expect(router.stack.length).toBeGreaterThanOrEqual(1)
  })
})
