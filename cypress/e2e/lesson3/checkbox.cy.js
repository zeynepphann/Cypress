describe('checkbox',()=>{

    it.skip('checking single box',()=>{

    cy.visit('https://automationexercise.com/')

    cy.get(':nth-child(1) > .panel-heading').click()

    //checkbox tikli degil mi 
    cy.get(':nth-child(1) > .panel-heading').should('not.be.checked')
    
    //checkbox tikli mi 
    cy.get(':nth-child(1) > .panel-heading').should('be.checked')

    //checkbox tiki kaldirma
    cy.get(':nth-child(1) > .panel-heading').uncheck().should('not.be.checked')
    })

    //cleck({multibe:true}) -> click(buraya yazilir) tek elemente uygulanir
    //birden fazla elemente uygulamak icin multibe kullanilir 


    



})