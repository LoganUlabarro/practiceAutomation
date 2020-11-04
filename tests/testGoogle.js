module.exports = {
    beforeEach: browser => {
        browser.url('https://www.google.com/')
    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        browser
            .setValue('input[name="q"]', ['Guilty Gear Accent Core', browser.Keys.ENTER])
            .waitForElementVisible('#res')
            .verify.containsText('#res', 'Guilty Gear')
            .pause(30000)
    }
}