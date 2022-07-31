import {test, expect} from '@playwright/test'

let outerHTML = `<html is="app-html"><head is="app-head"><title>Hello, world!</title></head><body is="app-body"><hello-world>Hello, world!</hello-world></body></html>`

test('outerHTML matches', async ({page}) => {
  await page.goto('http://localhost:3000/')
  let documentElement = page.locator('html')
  await expect(documentElement).toHaveJSProperty('outerHTML', outerHTML)
})
