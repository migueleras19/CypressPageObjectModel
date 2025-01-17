import LoginPage from '../page/LoginPage';
import ProductsPage from '../page/ProductsPage';
import CartPage from '../page/CartPage';
import CheckoutPage from '../page/CheckoutPage';
import ConfirmationsPage from '../page/ConfirmationPage';


describe('Ejercicio de Automatización E2E', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })

    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    const confitmationsPage = new ConfirmationsPage();


    it('Flujo de compras', () => {
        cy.fixture("data").then((data) => {
            loginPage.visit();
            loginPage.inputUsername('standard_user');
            loginPage.inputPassword('secret_sauce');
            loginPage.submit();
            cy.log('Inicio de Sesion Exitoso del usuario ${username}');

            productsPage.addProductsBackpack();
            productsPage.addProductsOnesie();
            cy.log('Producto añadido al carrito ${productName}');

            cartPage.shopingCart();
            cartPage.checkout();
            cy.log('Se ha realizado la compra con exito ${productName}');
            checkoutPage.fillInformation(data.firstname, data.lastname, data.code);
            checkoutPage.continueCheckout();
            checkoutPage.finishCheckout();
            confitmationsPage.ConfirmationMessage();
            cy.log("Se realizo la compra con exito");

        })
        cy.window().then((win) => win.close());
    });

    
});