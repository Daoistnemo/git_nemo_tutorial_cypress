context("Compra test", () => {
  beforeEach(() => {
    // Limpiar cookies o almacenamiento local si es necesario
    cy.clearCookies(); // Limpiar cookies
    cy.clearLocalStorage(); // Limpiar almacenamiento local

    // Navegar a la página principal antes de cada prueba
    cy.visit("/");

    cy.wait(2000);
    // Asegurarse de que no haya elementos visibles antes de realizar acciones
    cy.get('body').should('be.visible');

    cy.wait(1000);

    // Hacer clic en el botón de login
    cy.xpath("//*[@id='login2']").click();
    cy.wait(1000);

    // Verificar que aparece la ventana emergente de login
    cy.xpath('//h5[@id="logInModalLabel" and @class="modal-title" and text()="Log in"]').should("exist");

    // Ingresar el nombre de usuario
    cy.xpath('//input[contains(@class, "form-control") and contains(@id, "loginusername")]').type("dao12");
    cy.wait(1000);

    // Ingresar la contraseña
    cy.xpath('//*[@id="loginpassword"]').type("1213");
    cy.wait(1000);

    // Verificar que el label de login esté visible después de hacer clic en login
    cy.xpath('//*[contains(@onclick, "logIn()")]').click();

    // Verificar que el nombre de usuario esté visible en el menú de navegación
    cy.xpath('//a[@id="nameofuser" and text()="Welcome dao12"]').should('be.visible');
  });

  it("Compra y visita al carrito", () => {
    cy.wait(1000);

    cy.xpath('//a[@class="hrefch" and text()="Samsung galaxy s6"]').click();

    cy.wait(1000);

    cy.url().should('eq', 'https://demoblaze.com/prod.html?idp_=1');
    cy.wait(3000);
    cy.xpath('//a[@onclick="addToCart(1)" and text()="Add to cart"]').click();

    cy.on("window:alert", (alertText) => {
      // Verificar que el texto de la alerta sea el esperado
      expect(alertText).to.equal("Product added.");
    });

    cy.xpath("//*[@id='cartur']").click();

    cy.wait(2000);

    cy.url().should('eq', 'https://demoblaze.com/cart.html');
    cy.xpath('//*[@id="tbodyid"]/tr').should('have.length', 2); // Verifica que haya 2 productos (ajustar número según sea necesario)
  });
  it("Elimina productos del carrito hasta que no haya más", () => {
    cy.wait(1000);

    cy.xpath("//*[@id='cartur']").click();

    cy.wait(2000);

    cy.url().should('eq', 'https://demoblaze.com/cart.html');

    // Función recursiva para eliminar productos hasta que no haya más
    const eliminarProducto = () => {
      // Verificar si hay productos en el carrito
      cy.xpath("//tbody[@id='tbodyid']/tr").then(($rows) => {
        if ($rows.length > 0) {
          // Hacer clic en el botón de "Delete" del primer producto
          cy.wrap($rows[0]).find('a').contains('Delete').click();

        

          // Espera un poco para asegurar que la eliminación haya sucedido
          cy.wait(3000);

          // Llamar a la función recursiva para eliminar el siguiente producto
          eliminarProducto();
        }
      });
    };

    // Iniciar la eliminación de productos
    eliminarProducto();
      });
    });

