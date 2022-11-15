describe('',()=>{

    it.skip('login',()=>{
    cy.login('12zynp@gmail.com','djdjjd')
    //login-> commands.js de tanimlanan method
    //commands.js'de tanimlandigi icin framework'ten ulasabiliyoruz
    })

    it('negative log in',()=>{
        //hatali giris yapilir
        cy.screenshot()
    })
})