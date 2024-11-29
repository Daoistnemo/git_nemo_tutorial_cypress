class LoginPage {
    visit() {
      cy.visit('https://practicetestautomation.com/practice-test-login/');  // URL de la página de login
    }
  
    fillUsername(username) {
      cy.get('#username').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    submit() {
      cy.get('#submit').click();
    }
  
    checkLoginError() {
      cy.get('#error').should('be.visible');
    }
  
    checkWelcomeMessage(username) {
      cy.get('.post-title').should('contain', `Logged In Successfully`);
    }
  }
  
  export default LoginPage;
  