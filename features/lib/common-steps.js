import { until, WebElementCondition } from 'selenium-webdriver'

import driver from './web-driver-driver'
import { normalizeSpaces } from './text-utils'

const elementShouldContainText = async (expectedText, selector) => {
  const element = await driver.wait(until.elementLocated(selector))

  return driver.wait(
    new WebElementCondition('until element text contains', async () => {
      const text = await element.getText()
      return normalizeSpaces(text).includes(normalizeSpaces(expectedText))
        ? element
        : null
    }),
  )
}

export const elementShouldContainTextByCssSelector = async (
  expectedText,
  cssSelector,
) => elementShouldContainText(expectedText, { css: cssSelector })
