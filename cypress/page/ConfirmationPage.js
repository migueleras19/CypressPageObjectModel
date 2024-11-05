class ConfirmationsPage {
    ConfirmationMessage() {
        cy.contains('Thank you for your order!').should('be.visible')
        //tiempo de espera
        cy.wait(3000)
        
        
    }


}

export default ConfirmationsPage;