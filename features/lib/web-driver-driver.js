import webdriver from 'selenium-webdriver'

const builder = new webdriver.Builder().forBrowser('chrome')

if (!process.env.DEBUG && !process.env.TRAVIS_BUILD_NUMBER) {
  const chrome = require('selenium-webdriver/chrome')
  const chromeOptions = new chrome.Options()
  chromeOptions.addArguments('headless', 'disable-gpu')
  builder.setChromeOptions(chromeOptions)
}

export default builder.build()
