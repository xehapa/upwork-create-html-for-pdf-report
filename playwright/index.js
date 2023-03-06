const { chromium } = require('playwright')

const baseUrl = 'http://localhost:5500/complete'

;(async () => {
  const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    const paths = [
      'page-1.html',
      'page-2.html',
      'page-3.html',
      'page-4.html',
      'page-5.html',
      'page-6.html'
    ]
    
    let i = 0
    
    for (const path of paths) {
      ++i
      await page.goto(`${baseUrl}/${path}`);
      await page.waitForTimeout(300)
      await page.pdf({path: `../output/page-${i}.pdf`, printBackground: true})
      console.log(`Generate PDF number ${i}`)
    }
    
    await page.close()
    await browser.close()
})()
