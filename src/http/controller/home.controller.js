const homeService = require('../service/home.service')

async function homePage(req, res) {
  const data = await homeService.homePage()
  return res.render('home', { data })
}

module.exports = { homePage }
