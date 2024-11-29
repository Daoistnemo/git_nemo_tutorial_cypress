beforeEach(() => {
  // Hook a nivel raíz
  // Se ejecuta antes de cada prueba en cualquier contexto
  cy.log('Root Before each')  // Este comando permite ver información durante la ejecución
});


context('Hooks', () => {
  // Esto es solo para este contexto
  before(() => {
      cy.log('Before: se ejecuta una vez antes de todas las pruebas en el bloque');
  });
 
  beforeEach(() => {
      cy.log('BeforeEach: se ejecuta antes de cada prueba en el bloque'); // Se ejecuta antes de cada prueba en este contexto
  });


      it('Test 01', () => {
          //No establecemos acciones para este Test
      });
      it('Test 02', () => {
          //No establecemos acciones para este Test


      });


      afterEach(() => {
          cy.log('After Each: se ejecuta después de cada prueba en el bloque');
      });
 
      after(() => {
          cy.log('After: se ejecuta una vez después de todas las pruebas en el bloque');
      });


})
