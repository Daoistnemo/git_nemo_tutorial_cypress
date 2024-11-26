context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('/'); // Navega a la URL base
    });
  
    describe('Test #1 - Localizando elementos utilizando selectores CSS', () => {
      it('Debería agregar dos tareas y cambiar entre vistas', () => {
        // Paso 1: Añadir la primera tarea
        cy.xpath("//input[contains(@class, 'new-todo')]").type("My long task #1{enter}"); // Localiza el campo de texto y agrega la primera tarea
  
        // Paso 2: Añadir la segunda tarea
        cy.xpath("//input[contains(@class, 'new-todo')]").type("My long task #2{enter}"); // Localiza el campo de texto y agrega la segunda tarea
        cy.xpath("//input[contains(@class, 'new-todo')]").type("Mi tarea de prueba {enter}"); // Localiza el campo de texto y agrega la segunda tarea

        // Paso 3: Marcar como completada a una de las tareas
        cy.xpath("//li[1]/div[1]/input[1]").click(); // Marca la primera tarea como completada
  
        // Paso 4: Cambiar a la vista de tareas completadas y verificar que se agregó una
        cy.xpath('//*[@href="#/completed"]').click(); // Localiza el botón "Completed" y hace clic en él
       
        cy.xpath('//body/section[1]/div[1]/section[1]/ul[1]/li/div/label').should('have.length', 1); // Para vista "Completed"
  
        // Paso 5: Cambiar a la vista de tareas activas
        cy.xpath('//*[contains(@href, "#/active")]').click(); // Localiza el botón "Active" y hace clic en él
  
        // Verifica que hay dos tareas activas (la segunda tarea y la primera que no está completada)
        cy.xpath('//body/section[1]/div[1]/section[1]/ul[1]/li/div/label').should('have.length',4 ); // Para vista "Completed"
        cy.xpath('//label[contains(text(), "prueba")]') .parents('li').find('input.toggle') .click(); // Localizamos el checkbox o toggle buscando 
        //El localizador que contengta el texto "prueba", dentro de una lista li, y que dentro tenga un checkbox llamado "input.toggle"
        cy.xpath('//*[@href="#/completed"]').click(); // Localiza el botón "Completed" y hace clic en él

    })})})