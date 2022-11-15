
describe('hooks',()=>{

    before(()=>{
        console.log('before method')
    })
   
    beforeEach(()=>{
        console.log('before each method')
        cy.visit('https://the-internet.herokuapp.com/iframe')

    })
   
    after(()=>{
        console.log('after method')
    })
    

    afterEach(()=>{
        console.log('after each method')
        cy.url().should('include','iframe')

    })

    it('test1',()=>{
        cy.get('body').click()
    })
})