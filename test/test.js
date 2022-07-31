import {test, expect} from '@playwright/test'

let outerHTML = `<html is="app-html"><head is="app-head"><title>Testing ws-jsx-runtime...</title></head><body is="app-body"><hello-world name="JSX">Hello, JSX!</hello-world></body></html>`

test('outerHTML matches', async ({page}) => {
  await page.goto('http://localhost:3000/')
  let documentElement = page.locator('html')
  await expect(documentElement).toHaveJSProperty('outerHTML', outerHTML)
})
