require('dotenv').config()

module.exports = {
    globalSetup: `./config/${process.env.target}/global.setup.js`,
    globalTeardown: `./config/${process.env.target}/global.teardown.js`,
    testEnvironment: `./config/${process.env.target}/environment.js`,
    roots: ['./specs'],
    setupFilesAfterEnv: [`./config/${process.env.target}/after.setup.js`],
    runner: 'groups',
    testTimeout: 60000
}
