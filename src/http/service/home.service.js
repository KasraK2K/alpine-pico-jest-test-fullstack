const homeController = require('../repository/home.repository')

async function homePage() {
  const result = await homeController.homePage()
  return {
    editable: true,
    ...result,
  }
}

module.exports = { homePage }
