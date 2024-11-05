class CheckoutPage {
    fillInformation(firstName, lastName, zipCode) {
        cy.get('.title').should('be.visible');
        cy.contains("Checkout: Your Information").should("be.visible");
        cy.get('#first-name').should('be.visible').type(firstName);
        cy.get('#last-name').should('be.visible').type(lastName);
        cy.get('#postal-code').should('be.visible').type(zipCode);
        console.log(`Información de checkout rellenada: ${firstName} ${lastName}, ${zipCode}`);
    }

    continueCheckout() {
        cy.get('[data-test="continue"]').should('be.visible').click();
        cy.contains("Checkout: Overview").should("be.visible");
        console.log('Continuado al resumen de checkout');
    }

    finishCheckout() {
        cy.get('.title').should('be.visible');
        cy.contains("Checkout: Overview").should("be.visible");
        cy.get('#finish').should('be.visible').click();
        
    }
}

export default CheckoutPage;