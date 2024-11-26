context('Prueba de esperas en Cypress', () => {
    beforeEach(() => {
      cy.visit('https://uitestingplayground.com/home'); // Navega a la URL base
    });
  
    it('debería esperar al botón de la página para cargar', () => {
  
      // Verifica que el título de la página sea correcto
      cy.title().should('eq', 'UI Test Automation Playground');
    
      // Verifica que el texto del link "Load Delay" esté visible en la página
      cy.contains('Load Delay').should('be.visible');
  
      // Espera que el enlace con la clase "Load Delay" sea clickeable y hace clic
      cy.xpath('//*[contains(@href, "/loaddelay")]').click();  
      // Espera que se cargue la página de Load Delay
      cy.url().should('include', '/loaddelay');  // Verifica que la URL sea la correcta después del clic

      cy.xpath('//button[contains(@class, "btn btn-primary") and text()="Button Appearing After Delay"]').click();
      cy.wait(5000);
    
    });
  });
  