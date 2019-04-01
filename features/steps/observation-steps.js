import { When } from 'cucumber'
import expect from 'expect'

import driver from '../lib/web-driver-driver'
import { elementShouldContainTextByCssSelector } from '../lib/common-steps'

When(/I should be on a page titled '(.*)'/, async expectedTitle => {
  const currentTitle = await driver.getTitle()
  await expect(currentTitle).toEqual(expectedTitle)
})

When(/I should see '(.*)'$/, async expectedText =>
  elementShouldContainTextByCssSelector(expectedText, 'body'),
)

When(/I should not see '(.*)'/, async notExpectedText => {
  const bodyText = await driver.findElement({ css: 'body' }).getText()
  expect(bodyText).not.toContain(notExpectedText)
})
