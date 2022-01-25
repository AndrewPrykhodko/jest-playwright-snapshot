const signupEl = require('../../book/signup.page').elements
const asserts = require('../../test/signup/form.asserts')

// test that submit form and asserts fields / checkbox errors
exports.execute = user => it('submit', async () => {
    const page = global.__PAGE__
    await page.click(signupEl.submit)
    await Promise.all(Object
        .entries(user.err)
        .map(([field, err]) => asserts[field](err))
    )
})
