Cypress.Commands.add("doesContain", (element, wording) => {
    cy.get(element).contains(wording)
})

Cypress.Commands.add("triggerClick", (element) => {
    cy.get(element).click({force: true})
})

Cypress.Commands.add("inputText", (element, wording) => {
    cy.get(element).type(wording)
})

Cypress.Commands.add("isVisible", (element) => {
    cy.get(element).should('be.visible')
})

Cypress.Commands.add("checkWordingFromArray", (element, wording) => {
    cy.get(element).should('have.length', wording.length).then(el => {
        el.map((i, val) => {
            assert.equal(val.textContent, wording[i], `wording ${i} checked`)
        })
    })
})