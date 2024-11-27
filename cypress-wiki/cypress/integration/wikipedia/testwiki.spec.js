context('Página de inicio', () => {
    beforeEach(() => {
      cy.visit('https://www.wikipedia.org/'); // Navega a la URL 
    });
  
    describe('Test de busqueda en wikipedia con esperas', () => {
      it('Debería agregar dos tareas y cambiar entre vistas', () => {


        // Paso 1: Buscar barra de busqueda de Wikipedia. 

        cy.xpath("//*[@id='search-input']/input[1]").type("Globant{enter}"); // Localiza el campo de texto y busca "Globant"

        cy.wait(2000);
       
        // Paso 2: Verificar el Logo.

        cy.xpath("//img[contains(@src, 'Globant_Logo.svg')]").should('be.visible'); //Verificacion del logo

        // Paso 3: Verificar que el titulo este visible e incluya el texto 'Globant'

        cy.wait(6000);

        //
        cy.xpath("//span[@class='mw-page-title-main' and text()='Globant']").should('be.visible'); // Verificacion del titulo por medio del texto

        cy.xpath('//*[@id="firstHeading"]/span').should('include.text', 'Globant'); 

    })})})