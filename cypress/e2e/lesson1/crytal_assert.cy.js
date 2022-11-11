describe('Key Hotel',()=>{

    it('Test Case1',()=>{
    cy.visit('https://qa-environment.koalaresorthotels.com/') 

    cy.contains('Log in').click()



    //ASSERT
    //! Hesap sayfasinda oldugumuzu dogrulamak icin 5 secenek;

    //1.
    cy.url().should('include','Account')
    //url account iceriyor mu

    //2.
    cy.get('#navLogon > .nav-link').should('have.text','Log in')
    //locate edilen yerdeki metinde Log in yaziyor mu 

    //3.
    cy.get('.row > .mb-4').should('be.visible')
    //locate edilen yerde metin var mi veya gorunur mu 

    //4.
    // cy.title().should('eq',"KoalaResortHotels- Log in")

    //5.
    cy.get('.row > .mb-4').should('include.text','Log in')
    })
})