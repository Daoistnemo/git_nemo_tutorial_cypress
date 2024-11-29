// En primer lugar, debemos importar el POM de la locación correspondiente.
import TodosPage from '../../support/Pages/TodosPage.js'; // Ruta corregida

// Creamos una instancia de la clase
const todosPage = new TodosPage();

// Declaro variables.
const task1 = 'Present POM';
const task2 = 'Teach Cypress';

context('Example 01', () => {
  beforeEach(() => {
    cy.visit('/'); // Asegúrate de que la URL de la página sea la correcta
  });

  it('Test #1', () => {
    // Crear un par de tareas
    todosPage.addTodo(task1);
    todosPage.addTodo(task2);

    // Validar que hay un total de 4 tareas
    todosPage.todoCount().should('eq', 4);

    // Alternar la tercera tarea
    todosPage.clickTodoToggle(2); // Asegúrate de que el índice sea correcto para la tarea que deseas marcar

    // Validar que hay un total de 3 tareas
    todosPage.todoCount().should('eq', 3);

    // Abrir la pestaña de tareas completadas
    todosPage.clickCompletedLink();
  });
});
