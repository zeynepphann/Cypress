describe('Crystal Key Hotel',()=>{
    it("Otel testi",()=>{

    
    cy.visit('https://qa-environment.koalaresorthotels.com/')
    //selenium get

    //1.yol
    cy.get('#navLogon > .nav-link').click()

    //2.yol 
    cy.contains('Log in').click()
    //contains metni text olarak bulur
    //username: 'manager' 
    cy.get('#UserName').type('Manager') // type icerisinde yazani locate alinan yere yaz demek 
    cy.get('#Password').type('Manager1!') 
    cy.get('#btnSubmit').click()



  })
})