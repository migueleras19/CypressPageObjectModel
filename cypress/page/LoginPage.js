class LoginPage  {
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }
    inputUsername(username){
        cy.get('#user-name').type(username);
    }
    inputPassword(password){
        cy.get('#password').type(password);
    }

    submit(){
        cy.get('#login-button').click();
        console.log('Inicio de Sesion Exitoso del usuario ${username}');
    }
}

export default LoginPage;