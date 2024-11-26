/// <reference types='cypress' />

context('Variables', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Test 01', () => {
        // Añadir una tarea
        cy.get('.new-todo').type("Something...{enter}");

        // Usar un alias para almacenar los elementos de la lista
        cy.get('.todo-list li').as('items');

        // Verificar que la lista tiene 3 elementos
        cy.get('@items').should('have.length', 3);

        // Comprobar la cantidad de elementos directamente
        cy.get('.todo-list li').should('have.length', 3);
    });

    it('Test 02', () => {
        // Cargar el fixture y almacenar los datos en un alias
        cy.fixture("todos").as('todos');

        // Usar el alias para añadir las tareas al campo correspondiente
        cy.get('@todos').then(todos => {
            todos.todos.forEach(todo => {
                // Añadir tarea
                cy.get('.new-todo').type(todo + "{enter}");

                // Verificar que la tarea se ha añadido correctamente
                cy.contains(todo).should('exist');
            });
        });
    });
});
