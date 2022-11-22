describe('Custom commands',()=>{

    it('handling links',()=>{

       cy.visit('https://demo.nopcommerce.com/')
       cy.clickLink("Apple MacBook Pro 13-inch")
       cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
       cy.get('.overview').should('be.visible')
    })


    it  ('overwriting existing command',()=>{

        cy.visit('https://demo.nopcommerce.com/')

        cy.clickLink("APPLE MACBOOK PRO 13-inch")
        cy.get(':nth-child(2) > .product-item > .picture > a > img').click()
        cy.get('.overview').should('be.visible')
       
    })


    it.only('Login command',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink("Log in") //custom command 
        cy.loginapp("testing@gmail.com","test123");
       
    })
})