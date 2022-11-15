//1
cy.get('.tox-tinymce', { timeout: 10000 }).should('be.visible');

//2
 "defaultCommandTimeout"; 5000 

//3
it('slow test', { defaultCommandTimeout: 5000 },  () => {

      cy.get('slowElement') 
      
})
