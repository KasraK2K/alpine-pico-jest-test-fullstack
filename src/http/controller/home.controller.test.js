const homeService = require('../service/home.service')

describe('Home Controller', () => {
  describe('define', () => {
    test('homeService should be defined', () => {
      expect(homeService).toBeDefined()
    })
  })

  describe('homePage', () => {
    test('result should be object', async () => {
      const result = await homeService.homePage()
      expect(result).toBeTruthy()
      expect(typeof result).toEqual('object')
    })
  })
})
