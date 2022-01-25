const open = require('../test/hooks').open
const signupPage = require('../book/signup.page')
const signUp = require('../facades/signup')
const { users } = require('../data/signup-user.json')
const valid = require('../data/generated/user.js.json')

// mapping of static invalid scenarios
users.map(user =>
    describe(`signup for ${user.fields.name}`, () => {
        beforeAll(async () => {
            await open(signupPage.url)
        })

        Object.entries(user.fields).map(([field, value]) => {
            signUp.fill(field, value)
        })

        Object.entries(user.checkbox).map(([checkbox, value]) => {
            signUp.checkbox(checkbox, value)
        })

        signUp.submit(user)
    })
)

// valid scenario with dynamically generated data
describe('signup for valid', () => {
    beforeAll(async () => {
        await open(signupPage.url)
    })

    Object.entries(valid.fields).map(([field, value]) => {
        signUp.fill(field, value)
    })

    Object.entries(valid.checkbox).map(([checkbox, value]) => {
        signUp.checkbox(checkbox, value)
    })

    signUp.submit(valid)
})
