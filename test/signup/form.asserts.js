const signupEl = require('../../book/signup.page').elements
const confirm = require('../../book/confirm-email.page')
const getStyles = require('../../utils/style-fetcher').execute

// signup form asserts
const name = async err => {
    if (err === undefined) {
        expect(await global.__PAGE__.locator(signupEl.err.name).isHidden()).toBeTruthy()
    } else expect(await getStyles(signupEl.err.name)).toMatchSnapshot()
}

const email = async err => {
    if (err === undefined) {
        expect(await global.__PAGE__.locator(signupEl.err.name).isHidden()).toBeTruthy()
    } else expect(await getStyles(signupEl.err.email)).toMatchSnapshot()
}

const pass = async err => {
    if (err === 'empty') {
        expect(await getStyles(signupEl.err.pass)).toMatchSnapshot()
    } else if (err === 'complex') {
        expect(await getStyles(signupEl.err.passComplex)).toMatchSnapshot()
    }
}

const terms = async err => {
    if (err === 'unchecked') {
        expect(await getStyles(signupEl.err.terms)).toMatchSnapshot()
    } else if (err === undefined || err === false) {
        expect(await global.__PAGE__.isChecked(signupEl.terms)).toBe(false)
    } else expect(await global.__PAGE__.isChecked(signupEl.terms)).toBe(true)
}

const subscribe = async err => {
    expect(await global.__PAGE__.isChecked(signupEl.subscribe)).toBe(err)
}

const valid = async err => {
    if (err) {
        expect(await global.__PAGE__.url()).toContain(confirm.url)
        expect(await getStyles(confirm.elements.title)).toMatchSnapshot()
        expect(await getStyles(confirm.elements.code)).toMatchSnapshot()
    }
}

module.exports = {
    name,
    email,
    pass,
    terms,
    subscribe,
    valid
}
