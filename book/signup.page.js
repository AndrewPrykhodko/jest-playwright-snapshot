module.exports = {
    url: '/signup/',
    elements: {
        name: '[name="signup[name]"]',
        email: '[name="signup[email]"]',
        pass: '[name="signup[password]"]',
        terms: '[for="signup-terms"]',
        subscribe: '[for="signup-subscribe"]',
        submit: '.signup__submit',
        title: '.signup__title-form',
        free: '.ab-signup-usa--free-text',
        google: '#a11y-signup-with-google',
        err: {
            name: '#nameError',
            email: '#emailError',
            pass: '[data-testid="please-enter-your-password-1"]',
            passComplex: '#signup-form-password',
            terms: '#termsError'
        }
    }
}
