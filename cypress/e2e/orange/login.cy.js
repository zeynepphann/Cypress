describe('Orange login',()=>{

 /*    
    it('Orange login test',()=>{
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
       cy.fixture('orangeLogin').then((data)=>{
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.username)
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
       cy.get('.oxd-button').click()
         
       cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',data.expected)

    
       })
    })
 */

    //Access  through hook- foor multiple it blocks

    let userdata;
    before(()=>{
        cy.fixture("orangeLogin").then((data)=>{
            userdata=data;
        })
    })

    //pozitif
    it('FixturesDemoTest',()=>{
       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
       
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata[0].username)
       cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata[0].password)
       cy.get('.oxd-button').click()
         
       cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata[0].expected)
       
     })


     //negatif
    it('FixturesDemoTest',()=>{
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   
      
      cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata[1].username)
      cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata[1].password)
      cy.get('.oxd-button').click()
        
      //1
      cy.get('.oxd-text--h5').should('have.text',userdata[1].expected)
      //2
      cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata[1].alert)

    })
   

})