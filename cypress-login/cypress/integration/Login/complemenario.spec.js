/// <reference types='cypress' />

context('Login Test', () => {

    beforeEach(() => {
        // Navegar a la página principal
        cy.visit('/');
    });

    it('Login 2.0 - Iniciar sesión con múltiples credenciales', () => {
        // Cargar las credenciales desde el fixture
        cy.fixture('credentials').then((users) => {
            // Iterar sobre las credenciales
            users.forEach((user) => {
                // Ingresar el nombre de usuario
                cy.get('input[name="UserName"]').type(user.username);

                // Ingresar la contraseña
                cy.get('input[name="Password"]').type(user.password);

                // Hacer clic en el botón de login
                cy.get('#login').click();

                // Verificar que el mensaje de bienvenida sea visible
                cy.contains('Welcome').should('exist');
                cy.get('#login').click(); // Logout al user
                // Opcional: limpiar el campo de usuario para el siguiente intento
                cy.get('input[name="UserName"]').clear();
                cy.get('input[name="Password"]').clear();


            });
        });
    });
});
