const { chromium } = require('playwright')
const fs = require('fs')

;(async () => {
  const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const urls = [
      'http://localhost:5500/complete/page-1.html',
      'http://localhost:5500/complete/page-2.html',
      'http://localhost:5500/complete/page-3.html',
      'http://localhost:5500/complete/page-4.html',
      'http://localhost:5500/complete/page-5.html',
      'http://localhost:5500/complete/page-6.html'
    ]
    
    for (const url of urls) {
      await page.goto(url);
      await page.waitForTimeout(5000)
      await page.pdf({path: `file/${Date.now()}.pdf`, printBackground: true})
    }
    await browser.close()
    const f = fs.read('file', {encoding: 'utf-8'}).toString()
    console.log(f)
})()
