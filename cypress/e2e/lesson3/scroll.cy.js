describe('scroll',()=>{
    it('scroll into view',()=>{ //locate edilen yere gider 
        cy.visit('https://qa-environment.koalaresorthotels.com/') 

        cy.wait(2000)

        cy.get('.col-md-7 > .mb-4').scrollIntoView()
        //locate edilen yere gider 

        cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2').scrollIntoView()


        cy.scrollTo('bottom')//en alta iner
        cy.scrollTo('top')//en uste cikar
        cy.scrollTo(0,1000) //1000px down
        cy.scrollTo(0,-1000) //1000px up
    })
}) 