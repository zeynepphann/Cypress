describe('checkbox',()=>{

    it('checking single box',()=>{
    cy.visit('https://automationexercise.com/')

    cy.get(':nth-child(1) > .panel-heading').click()

    //checkbox tikli degil mi 
    cy.get(':nth-child(1) > .panel-heading').should('not.be.checked')
    
    //checkbox tikli mi 
    cy.get(':nth-child(1) > .panel-heading').should('be.checked')

    //checkbox tiki kaldirmak
    cy.get(':nth-child(1) > .panel-heading').uncheck()


    })
})