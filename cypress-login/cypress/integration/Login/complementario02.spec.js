

context('Login Test', () => {

    beforeEach(() => {
        // Navegar a la página principal
        cy.visit('/');
    });

    it('Login 1.0 - Iniciar sesión con múltiples credenciales', () => {
        // Cargar las credenciales desde el fixture
        cy.fixture('credentials').then((users) => {
            // Iterar sobre las credenciales
            users.forEach((user) => {
                // Ingresar el nombre de usuario
                cy.get('input[name="UserName"]').clear().type(user.username);

                // Ingresar la contraseña
                cy.get('input[name="Password"]').clear().type(user.password);

                // Hacer clic en el botón de login
                cy.get('#login').click();

                // Verificar que el mensaje de bienvenida sea visible
                cy.contains('Welcome').should('exist');

                // Logout después de la prueba de login exitosa
                cy.get('#login').click(); 

                // Limpiar los campos de usuario y contraseña para el siguiente intento
                cy.get('input[name="UserName"]').clear();
                cy.get('input[name="Password"]').clear();
            });
        });
    });

    it('Login 2.0 - Iniciar sesión con credenciales incorrectas (usuario no vacio)', () => {
        // Cargar las credenciales desde el fixture
        cy.fixture('credentials').then((users) => {
            // Iterar sobre las credenciales para probar con datos inválidos
            users.forEach(() => {
                // Ingresar un nombre de usuario incorrecto
                cy.get('input[name="UserName"]').clear();

                // Ingresar la contraseña
                cy.get('input[name="Password"]').clear().type("pwd");

                // Hacer clic en el botón de login
                cy.get('#login').click();

                // Verificar que el mensaje de error sea visible
                cy.contains('Invalid username/password').should('exist');

                // Limpiar los campos de usuario y contraseña para el siguiente intento
                cy.get('input[name="UserName"]').clear();
                cy.get('input[name="Password"]').clear();
            });
        });
    });
    it('Login 3.0 - Iniciar sesión con credenciales incorrectas (contraseña no válida)', () => {
        // Cargar las credenciales desde el fixture
        cy.fixture('credentials').then((passw) => {
            // Iterar sobre las credenciales para probar con datos inválidos
            passw.forEach(() => {
                // Ingresar un nombre de usuario incorrecto
                cy.get('input[name="UserName"]').clear().type("Daoist_nemo");

                // Ingresar la contraseña
                cy.get('input[name="Password"]').clear().type("pwd1");

                // Hacer clic en el botón de login
                cy.get('#login').click();

                // Verificar que el mensaje de error sea visible
                cy.contains('Invalid username/password').should('exist');

                // Limpiar los campos de usuario y contraseña para el siguiente intento
                cy.get('input[name="UserName"]').clear();
                cy.get('input[name="Password"]').clear();
            });
        });
    });

    it('Login 4.0 - Iniciar sesión con credenciales incorrectas (contraseña y usuario vacios)', () => {
        // Cargar las credenciales desde el fixture
        cy.fixture('credentials').then((nulos) => {
            // Iterar sobre las credenciales para probar con datos inválidos
            nulos.forEach(() => {
                // Ingresar un nombre de usuario incorrecto
                cy.get('input[name="UserName"]').clear();

                // Ingresar la contraseña
                cy.get('input[name="Password"]').clear();

                // Hacer clic en el botón de login
                cy.get('#login').click();

                // Verificar que el mensaje de error sea visible
                cy.contains('Invalid username/password').should('exist');

                // Limpiar los campos de usuario y contraseña para el siguiente intento
                cy.get('input[name="UserName"]').clear();
                cy.get('input[name="Password"]').clear();
            });
        });
    });

    it('Login 5.0 - Iniciar sesión con credenciales incorrectas (contraseña  vacios)', () => {
        // Cargar las credenciales desde el fixture
        cy.fixture('credentials').then((pssw) => {
            // Iterar sobre las credenciales para probar con datos inválidos
            pssw.forEach(() => {
                // Ingresar un nombre de usuario incorrecto
                cy.get('input[name="UserName"]').clear().type("Daoist_nemo");

                // Ingresar la contraseña
                cy.get('input[name="Password"]').clear();

                // Hacer clic en el botón de login
                cy.get('#login').click();

                // Verificar que el mensaje de error sea visible
                cy.contains('Invalid username/password').should('exist');

                // Limpiar los campos de usuario y contraseña para el siguiente intento
                cy.get('input[name="UserName"]').clear();
                cy.get('input[name="Password"]').clear();
            });
        });
    });
});
