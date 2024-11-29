import LoginPage from '../../support/pages/loginpage';

const loginPage = new LoginPage();

context('Login Tests', () => {
  beforeEach(() => {
    loginPage.visit(); 
  });

  it('Login success', () => {
    loginPage.fillUsername('student');       
    loginPage.fillPassword('Password123');   
    loginPage.submit();                      
    loginPage.checkWelcomeMessage();
  });

  it('Login failure with incorrect credentials', () => {
    loginPage.fillUsername('invalidUser');   
    loginPage.fillPassword('invalidPassword'); 
    loginPage.submit();                      


    loginPage.checkLoginError();
  });
});
