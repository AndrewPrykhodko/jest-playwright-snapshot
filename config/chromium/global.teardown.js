const os = require('os')
const rimraf = require('rimraf')
const path = require('path')
const fs = require('fs')
const { stdout } = require('process')
const reportDir = `${__dirname}/../../test-report`

if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir)
}

const log = fs.createWriteStream(`${reportDir}/jest-report.json`)

const DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup')
module.exports = async function () {
    // close the browser instance
    await global.__BROWSER_GLOBAL__.close()

    stdout.write = log.write.bind(log)
    // clean-up the wsEndpoint file
    rimraf.sync(path.join(DIR, 'wsEndpoint-playwright'))
}
