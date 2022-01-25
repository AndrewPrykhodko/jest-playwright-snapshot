const { chromium } = require('playwright')
const mkdirp = require('mkdirp')
const path = require('path')
const fs = require('fs')
const os = require('os')

const DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup')

module.exports = async function () {
    const browser = await chromium.launchServer({
        headless: process.env.HEAD === 'false',
        args: [
            '--no-sandbox'
        ]
    })

    // store the browser instance so we can teardown it later
    // this global is only available in the teardown but not in TestEnvironments
    global.__BROWSER_GLOBAL__ = browser

    mkdirp.sync(DIR)
    fs.writeFileSync(path.join(DIR, 'wsEndpoint-playwright'), browser.wsEndpoint())
}
