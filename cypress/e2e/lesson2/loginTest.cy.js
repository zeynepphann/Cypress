describe('Login',()=>{
    const eMail="qwer@gmail.com"
    const pass="dhfh"

    it.skip('login negatif',()=>{ //siteye ulasilmiyor 
        cy.visit('https://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(pass)
        cy.get('.btn').click()
        cy.get('#fail').should('include.text','girdiginiz bilgiler hatalidir')
        //fail bekledigimiz durumlarda kullanabiliriz
    })

    it('login pozitif',()=>{
        cy.visit('https://test.iyikisordun.com/login.php')
        cy.get('[type="email"]').type(eMail)
        cy.get('[type="password"]').type(pass)
        cy.get('.btn').click()
    })
})