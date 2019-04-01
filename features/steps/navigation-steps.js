import { When } from 'cucumber'

import driver from '../lib/web-driver-driver'
import paths from '../lib/paths'

When(/I go to the '(.*)' page/, async page => {
  const path = page.startsWith('/') ? page : paths[page]

  if (!path) {
    throw new Error(
      `Could not find page '${page}' in ${require.resolve('../lib/paths')}`,
    )
  }
  await driver.navigate().to(`http://localhost:3000${path}`)
})
