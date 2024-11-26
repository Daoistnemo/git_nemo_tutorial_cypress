context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('/'); // Navega a la URL base
    });
  
    it('debería cargar correctamente', () => {
      // Verifica que el título de la página sea correcto
      cy.title().should('eq', 'Cypress.io: Kitchen Sink');
  
      // Verifica que el texto "todos" esté presente en la página
      cy.contains('todos').should('be.visible');
    });
  });
  