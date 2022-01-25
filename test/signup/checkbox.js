const signupEl = require('../../book/signup.page').elements
const asserts = require('./form.asserts')

// test that asserts checkbox was checked
exports.execute = (checkbox, value) => it(`check ${checkbox} is ${value}`, async () => {
    const page = global.__PAGE__
    if (value) {
        await page.click(signupEl[checkbox])
    }
    await asserts[checkbox](value)
})
