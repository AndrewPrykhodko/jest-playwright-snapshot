const { random, internet } = require('faker')

module.exports = {
    fields: {
        name: random.word(6),
        email: internet.email(),
        pass: internet.password()
    },
    checkbox: {
        terms: true,
        subscribe: true
    },
    err: {
        valid: true
    }
}
