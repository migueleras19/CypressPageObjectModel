class ProductsPage {
    addProduct(productName) {
        cy.contains(productName).should('be.visible').click();
        cy.xpath('//button[@id="add-to-cart"]').should('be.visible').click();
        cy.xpath('//button[@id="back-to-products"]').should('be.visible').click();
        console.log(`Producto añadido al carrito: ${productName}`);
    }

    addProductsBackpack() {
        this.addProduct('Backpack');
    }

    addProductsOnesie() {
        this.addProduct('Onesie');
    }
}

export default ProductsPage;