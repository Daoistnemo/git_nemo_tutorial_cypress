context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('/'); // Navega a la URL base
    });

    describe('Test #5: Reversing the Default Assertions', () => {
      it('Debería invertir las assertions por defecto y observar el comportamiento', () => {

         // Paso 1: Comportamiento por defecto al utilizar cy.get
         cy.xpath("//button[@class='destroy todo-button']").should('exist'); // Esperamos que esta prueba falle, ya que el elemento no está presente

        // Paso 2: Encontrar el elemento button-close y verificar que no existe en el DOM
        cy.xpath("//button[@class='destroy todo-button']").should('not.exist'); // Verifica que el botón no exista en el DOM

       
      });
    });
});
 