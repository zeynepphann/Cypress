describe('Orange login',()=>{


     it('FixturesDemoTest 2',()=>{

        cy.fixture("orangeLogin").then((data)=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
       

        data.forEach((userdata)=>{
         
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
        cy.get('.oxd-button').click();

        if(userdata.username=="Admin" && userdata.password=="admin123")
        {
            cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected);


            cy.get('.oxd-userdropdown-tab').click()
            cy.contains('Logout').click()

        }
        else{
            cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.alert);
        }

        })

      })

    })

})


