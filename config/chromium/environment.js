const NodeEnvironment = require('jest-environment-node')
const { chromium } = require('playwright')
const fs = require('fs')
const path = require('path')
const os = require('os')

const DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup')

class chromiumEnvironment extends NodeEnvironment {
    // eslint-disable-next-line no-useless-constructor
    constructor (config) {
        super(config)
    }

    async setup () {
        await super.setup()
        // read wsEndpoint data
        const wsEndpoint = fs
            .readFileSync(path.join(DIR, 'wsEndpoint-playwright'), 'utf8')

        if (!wsEndpoint) {
            throw new Error('wsEndpoint not found')
        }

        // connect to chromium
        this.global.__BROWSER__ = await chromium.connect({
            wsEndpoint: wsEndpoint
        })

        // create new cromium context
        this.global.__CONTEXT__ = await this.global.__BROWSER__.newContext()

        // assigns globals from env or sets default values
        this.global.__URL__ = process.env.BASE_URL || 'https://miro.com'
    }

    async teardown () {
        await super.teardown()
    }

    runScript (script) {
        return super.runScript(script)
    }
}

module.exports = chromiumEnvironment
