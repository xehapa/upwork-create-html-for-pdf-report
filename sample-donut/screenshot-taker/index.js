const { chromium } = require('playwright')

;(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('http://localhost:5500/sample-donut/chart.js/')
    await page.waitForTimeout(5000)
    await page.pdf({ path: 'test.pdf' })
    await browser.close()
  })()