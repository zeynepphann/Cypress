describe('Viewports',()=>{

    it.skip('iphone8',()=>{
        cy.visit('https://www.amazon.com/')
        cy.viewport('iphone-8')
        cy.screenshot()
    })

    it.skip('imac',()=>{
       
        cy.visit('https://www.amazon.com/')
        cy.viewport('macbook-16')
        cy.screenshot()
    })

    it('custom',()=>{
       
        cy.visit('https://www.amazon.com/')
        cy.viewport(6000,6700)
        cy.screenshot()
    })

})