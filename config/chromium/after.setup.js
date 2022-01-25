const registerScreenshotReporter = require('../../reporter/screenshot.reporter').execute
// load reporter for screanshots on failure
registerScreenshotReporter()

// global hooks create and close page
beforeAll(async () => {
    global.__PAGE__ = await global.__CONTEXT__.newPage()
})

afterAll(async () => {
    await global.__PAGE__.close()
})
