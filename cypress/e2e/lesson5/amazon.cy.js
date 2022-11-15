describe('search',()=>{

    it('amazon search',()=>{
     cy.amazonSearch('imac')
     cy.get('.a-color-state').should('have.text','"imac"')
    })
})