import { When } from 'cucumber'
import { until } from 'selenium-webdriver'

import driver from '../lib/web-driver-driver'

const clickWhenAvailable = async selector => {
  await driver.wait(until.elementLocated(selector)).click()
}

When(/I fill '(.*)' with '(.*)'/, async (target, value) => {
  await driver
    .findElement({ xpath: `//label[contains(text(), "${target}")]/..//input` })
    .sendKeys(value)
})

When(/I click on element with id '(.*)'/, async target => {
  await clickWhenAvailable({ xpath: `//body//*[@id="${target}"]` })
})
