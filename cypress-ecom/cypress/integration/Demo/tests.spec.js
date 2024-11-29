context("Signup Test", () => {
    beforeEach(() => {
      // Limpiar cookies o almacenamiento local si es necesario
      cy.clearCookies(); // Limpiar cookies
      cy.clearLocalStorage(); // Limpiar almacenamiento local
  
      // Navegar a la página principal antes de cada prueba
      cy.visit("/");

      cy.wait(2000);
      // Asegurarse de que no haya elementos visibles antes de realizar acciones
      cy.get('body').should('be.visible');

    });
      
  //---------------------------------------------------------------------------------------------

    it("Signup 1.0 - Subscripcion con credenciales correctas", () => {
      cy.wait(1000);
  
      // Hacer clic en el botón de sign up
      cy.xpath("//*[@id='signin2']").click();
      cy.wait(1000);
  
      // Verificar que aparece la ventana emergente
      cy.xpath('//*[@id="signInModalLabel"]').should("exist");
  
      // Ingresar el correo
      cy.xpath('//*[@id="sign-username"]').type("lord12");
      cy.wait(1000);
  
      // Ingresar la contraseña
      cy.xpath('//*[@id="sign-password"]').type("wolfy");
      cy.wait(1000);
  
      // Hacer clic en el botón de registro
      cy.xpath('//*[@onclick="register()"]').click(); 
  
      // Verificar la alerta
      cy.on("window:alert", (alertText) => {
        // Verificar que el texto de la alerta sea el esperado
        expect(alertText).to.equal("Sign up successful.");
      });
    });


  //---------------------------------------------------------------------------------------------

    it("Login 2.0 - Login con usuario registrado", () => {
      cy.wait(1000);
  
      // Hacer clic en el botón de login
      cy.xpath("//*[@id='login2']").click();
      cy.wait(1000);
  
      // Verificar que aparece la ventana emergente de login
      cy.xpath('//h5[@id="logInModalLabel" and @class="modal-title" and text()="Log in"]').should("exist");
  
      // Ingresar el nombre de usuario
      cy.xpath('//input[contains(@class, "form-control") and contains(@id, "loginusername")]').type("dao12");
      cy.wait(1000);
  
      // Ingresar la contraseña
      cy.xpath('//*[@id="loginpassword"]').type("1213");
      cy.wait(1000);
  
      // Verificar que el label de login esté visible después de hacer clic en login
      cy.xpath('//*[contains(@onclick, "logIn()")]').click(); 
  
      // Verificar que el nombre de usuario esté visible en el menú de navegación
      cy.xpath('//a[@id="nameofuser" and text()="Welcome dao12"]').should('be.visible');
    });
    
  //---------------------------------------------------------------------------------------------

    it("Logout 3.0 - Logout correcto", () => {
        cy.wait(1000);
    
        // Hacer clic en el botón de login
        cy.xpath("//*[@id='login2']").click();
        cy.wait(1000);
    
        // Verificar que aparece la ventana emergente de login
        cy.xpath('//h5[@id="logInModalLabel" and @class="modal-title" and text()="Log in"]').should("exist");
    
        // Ingresar el nombre de usuario
        cy.xpath('//input[contains(@class, "form-control") and contains(@id, "loginusername")]').type("dao12");
        cy.wait(1000);
    
        // Ingresar la contraseña
        cy.xpath('//*[@id="loginpassword"]').type("1213");
        cy.wait(1000);
    
        // Verificar que el label de login esté visible después de hacer clic en login
        cy.xpath('//*[contains(@onclick, "logIn()")]').click(); 
    
        // Verificar que el nombre de usuario esté visible en el menú de navegación

        cy.wait(2000);

        cy.xpath('//a[@id="nameofuser" and text()="Welcome dao12"]').should('be.visible');
        cy.wait(2000);

        cy.xpath('//a[@id="logout2" and text()="Log out"]').should('be.visible').click();
        
        cy.wait(2000);

        cy.xpath("//*[@id='login2']").should('be.visible');

    
      });
  });
  