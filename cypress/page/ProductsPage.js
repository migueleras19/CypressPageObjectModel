class ProductsPage {
    addProduct(productName) {
        cy.contains(productName).click()
        cy.xpath('//button[@id="add-to-cart"]').click()
        cy.xpath('//button[@id="back-to-products"]').click()
    }

    addProductsBackpack() {
        this.addProduct('Backpack')
    }

    addProductsOnesie() {
        this.addProduct('Onesie')
    
    console.log('Producto añadido al carrito ${productName}');
    }
}

export default ProductsPage;