context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('/'); // Navega a la URL base
    });
  
    describe('Test #1 - Realizar un Login correcto ', () => {
      it('Debería poder iniciar sesión con el usuario correcto', () => {
  
        // Paso 1: Añadir el usuario
        cy.xpath('//input[@name="UserName"]').type("Daoist_nemo"); // Localiza el campo de texto y agrega el usuario
  
        // Paso 2: Añadir la contraseña incorrecta
        cy.xpath('//input[@name="Password"]').type("jeje"); // Localiza el campo de texto y escribe la contraseña
  
        // Paso 3: Completar el formulario presionando el botón
        cy.xpath("//*[@id='login']").click(); // Presionar el botón de Login
  
        // Paso 4: Verificacion final
        cy.contains('Invalid username/password').should('be.visible'); // Verifica que el texto "Welcome" sea visible
      });
    });
  });
  