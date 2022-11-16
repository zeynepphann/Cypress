describe('Paylinn bank',()=>{

    it('paylinn login test',()=>{
       cy.visit("https://paylinn.com/")
       cy.get('[href="/login"]').click() //or contains('Sing In').click()
       cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('User')
       cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('user')       
       cy.get('.MuiButton-label').click()
       cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('have.text',"Welcoki")  /* or contains.text */
    })
})