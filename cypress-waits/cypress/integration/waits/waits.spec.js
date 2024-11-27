context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('/'); // Navega a la URL 
    });
  
    describe('Prueba integral de espera', () => {
      it('Debería esperar y verificar dos mensajes', () => {
  
        // Paso 1: Buscar el botón y darle click para iniciar la espera
        cy.xpath("//*[@id='ajaxButton']").click(); // Localiza el botón y le da click
  
        // Paso 2: Verificación de respuesta al darle click al botón por medio de la animación 
        cy.xpath("//*[@id='spinner']").should('be.visible'); // Verificación de animación
  
        // Espera explícita de 16 segundos (simula tiempo de carga)
        cy.wait(16000); 
  
        // Esperar a que el spinner desaparezca
        cy.xpath("//*[@id='spinner']").should('not.be.visible'); // Verifica que el spinner desaparezca
  
        // Paso 3: Verificar el mensaje (Debería estar presente uno)
        cy.xpath("//p[@class='bg-success' and contains(text(), 'Data loaded')]")
          .should('be.visible')
          .and('include.text', 'Data loaded');
  
        // Verificar que el mensaje esté dentro del contenedor `//*[@id="content"]`
        cy.xpath('//*[@id="content"]//p[@class="bg-success" and contains(text(), "Data loaded")]')
          .should('have.length', 1); // Verifica que haya 1 mensaje visible
  
        // Repetir el proceso (Paso 4)
        cy.xpath("//*[@id='ajaxButton']").click(); // Clic nuevamente en el botón
  
        // Verificación de animación por segunda vez
        cy.xpath("//*[@id='spinner']").should('be.visible'); 
  
        // Esperar nuevamente a que desaparezca el spinner
        cy.wait(16000); 
        cy.xpath("//*[@id='spinner']").should('not.be.visible'); // Verifica que el spinner desaparezca
  
        // Paso 5: Verificar que el mensaje se haya añadido una segunda vez
        cy.xpath('//*[@id="content"]//p[@class="bg-success" and contains(text(), "Data loaded")]').should('have.length', 2); // Verifica que ahora haya 2 mensajes visibles
  
      });
    });
  });
  