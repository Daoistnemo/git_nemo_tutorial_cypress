
context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('/'); // Navega a la URL base, teniendo como base la pagina de Cypress
    });
  


describe('Test #1 - Localizando elementos utilizando selectores CSS', () => {
    it('Debería agregar dos tareas y cambiar entre vistas', () => {
      // Paso 1: Añadir la primera tarea
      cy.get('.new-todo').type("My long task #1{enter}"); // Localiza el campo de texto y agrega la primera tarea
  
      // Paso 2: Añadir la segunda tarea
      cy.get('.new-todo').type("My long task #2{enter}"); // Localiza el campo de texto y agrega la segunda tarea
        
      // Paso 3: Marcar como completada a una de las tareas

      cy.get('.todo-list li').eq(1).find('input.toggle').click();

      // Paso 3: Cambiar a la vista de tareas completadas y verificar que se agrego una

      cy.contains('Completed').click(); // Localiza el botón "Completed" y hace clic en él
      cy.get('.todo-list li').should('have.length', 1); // Verifica que hay una tarea en la lista

      // Paso 4: Cambiar a la vista de tareas activas
      cy.contains('Active').click(); // Localiza el botón "Active" y hace clic en él
  
      // Opcional: Verifica que las tareas están correctamente añadidas y que las vistas de tareas funcionan
      cy.get('.todo-list li').should('have.length', 3); // Verifica que hay tres tareas en la lista
  

    });
  });
  
});

