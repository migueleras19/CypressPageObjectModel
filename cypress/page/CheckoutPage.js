class CheckoutPage {
    fillInformation(firstName, lastName, zipCode) {
        cy.get('.title').should('be.visible')
        cy.contains("Checkout: Your Information").should("be.visible");
        cy.get('#first-name').type(firstName)
        cy.get('#last-name').type(lastName)
        cy.get('#postal-code').type(zipCode)
    }
    continueCheckout() {
        cy.get('[data-test="continue"]').click()
    }
    finishCheckout() {
        cy.get('.title').should('be.visible')
        cy.contains("Checkout: Overview").should("be.visible");
        cy.get('#finish').click()
    }
}

export default CheckoutPage;