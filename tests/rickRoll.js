module.exports = {
    beforeEach: browser => {
        browser.url('https://www.youtube.com/')
    },
    after: browser => {
        browser.end()
    },
    'rickRoll': browser => {
        browser
            .click('input[id="search"]')
            .setValue('input[id="search"]', 'Never gonna give you up')
            .click('#search-icon-legacy')
            .click('img[src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hq720.jpg?sqp=-oaymwEZCOgCEMoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC5ZI35o1m4qvSD1ih_yvGlWXlhfw"]')
            .verify.containsText(".style-scope ytd-video-primary-info-renderer", "Rick Astley")
            .pause(50000)

    }
}