class CartPage {
    shopingCart() {
        cy.xpath('(//a[@class="shopping_cart_link"])[1]').click()
        cy.get('.title').should('be.visible')
        cy.contains("Your Cart").should("be.visible");
    }

    checkout() {
        cy.xpath('//button[@id="checkout"]').click()
        
    }

}

export default CartPage;