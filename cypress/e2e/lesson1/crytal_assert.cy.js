describe('Key Hotel',()=>{

    it('Test Case1',()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/') 

    cy.contains('Log in').click()

    cy.url().should('include','Account')

    cy.get('#navLogon > .nav-link').should('have.text','Log in')

    cy.get('.row > .mb-4')
    })
})