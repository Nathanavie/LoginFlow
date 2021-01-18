describe('Check that the login flow shows the correct wording and animations', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080)
    })

    it('Load the project in localhost on port 3000', () => {
        cy.visit('https://loginflowtechtest.netlify.app/')
    })
    
    it('Check the h1 tag says "LOGIN"', () => {
        cy.checkWordingFromArray('h1', ["LOGIN"])
    })

    it('Check the p tag wordings are correct', () => {
        cy.checkWordingFromArray('p', ["Login with your Gamma cloud telephony account.", "Forgot password", "Remember my password"])
    })
    
    it('Check the label tag wordings are correct', () => {
        cy.checkWordingFromArray('.formInputContainer label', ["Username", "Password"])
    })

    it('Check the button wording is correct', () => {
        cy.checkWordingFromArray('button', ["Login"])
    })

    it('Trigger the log in', () => {
        cy.inputText('input[name="username"]', 'Testing')
        cy.inputText('input[name="password"]', 'Password')
        cy.triggerClick('button')
    })

    it('Make sure the log in animation appears', () => {
        cy.isVisible('#loginAnimation > svg')
        cy.isVisible('#dotsP')
    })
    
    it('Wait 5 seconds for the log in to complete', () => {
        cy.wait(5000)
    })

    it('Check the h1 tag says "You are now logged in"', () => {
        cy.checkWordingFromArray('h1', ["You are now logged in"])
    })
    
    it('Check the p tag says "Great stuff"', () => {
        cy.checkWordingFromArray('p', ["Great stuff"])
    })

})
