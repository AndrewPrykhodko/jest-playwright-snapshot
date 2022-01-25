const signupEl = require('../../book/signup.page').elements
const asserts = require('../../test/signup/form.asserts')

// test that asserts field does not show error on filling up
exports.execute = (field, value) => it(`fill ${field} with ${value}`, async () => {
    const page = global.__PAGE__
    await page.fill(signupEl[field], value)
    await page.click(signupEl.title)
    await asserts[field](undefined)
})
