describe('allerts',()=>{

    it('allerts test',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(1) > button').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('accept alert Test',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(2) > button').click()
        cy.get('#result').should('have.text','You clicked: Ok')

    })


    it('dismiss alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get(':nth-child(2) > button').click()  

        cy.on("window:confirm",(str)=>{
            return false // cancel tiklamis olur true olsaydi ok tiklayacakti
        })        
        cy.get('#result').should('have.text','You clicked: Cancel')
    })

    it('entering text on the allert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.window() // pop up pencelereleri kontrol edilir
        .then(($windowElement)=>{ //prompt'a bilgi girisi saglar 
        cy.stub($windowElement,'prompt').returns('hi') //stub prompt'a mesaj gonderir
        cy.get(':nth-child(3) > button').click()    
    })

    cy.get('#result').should('have.text','You entered: hi')

    })

})