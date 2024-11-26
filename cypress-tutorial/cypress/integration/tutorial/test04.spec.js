context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('/'); // Navega a la URL base
    });
  
    describe('Test #1 - Localizando elementos utilizando selectores CSS', () => {
      it('Debería agregar dos tareas y cambiar entre vistas', () => {

        // Verificar que la lista sea tenga 2.

        cy.xpath("//ul[@class='todo-list']/li//input[@class='toggle']").should('have.length', 2); // Verifica que hay 2 tareas inicialmente

        // Paso 1: Añadir la primera tarea
        cy.xpath("//input[contains(@class, 'new-todo')]").type("My long task #1{enter}"); // Localiza el campo de texto y agrega la primera tarea
        
        cy.xpath("//ul[@class='todo-list']/li//input[@class='toggle']").should('have.length', 3); // Verifica que hay 3 tareas inicialmente


        // Paso 2: Añadir la segunda tarea
        cy.xpath("//input[contains(@class, 'new-todo')]").type("My long task #2{enter}"); // Localiza el campo de texto y agrega la segunda tarea
        
        cy.xpath('//label[contains(text(), "My long task #1")]') .parents('li').find('input.toggle') .click(); // Localizamos el checkbox o toggle buscando 

        // Paso 3: Marcar como completada a una de las tareas
        cy.xpath("(//input[@class='toggle' and @type='checkbox'])[1]").click(); // Marca la primera tarea como completada
  
        // Paso 4: Cambiar a la vista de tareas completadas y verificar que se agregó una
        cy.xpath('//*[@href="#/completed"]').click(); // Localiza el botón "Completed" y hace clic en él
       
        cy.xpath("//ul[@class='todo-list']/li//input[@class='toggle']").should('have.length', 2); // Para vista "Completed"
  
        // Paso 5: Cambiar a la vista de tareas activas
        cy.xpath('//*[contains(@href, "#/active")]').click(); // Localiza el botón "Active" y hace clic en él
  
        // Verifica que hay dos tareas activas (la segunda tarea y la primera que no está completada)
        cy.xpath("//ul[@class='todo-list']/li//input[@class='toggle']").should('have.length',2); // Para vista "Completed"
        //El localizador que contengta el texto "prueba", dentro de una lista li, y que dentro tenga un checkbox llamado "input.toggle"
        cy.xpath('//*[@href="#/completed"]').click(); // Localiza el botón "Completed" y hace clic en él

          // Paso 6: Validar que la tarea está marcada como completada
        cy.contains('My long task #1').parents('li').should('have.class', 'completed'); // Verifica que el <li> tiene la clase 'completed'

    })})})