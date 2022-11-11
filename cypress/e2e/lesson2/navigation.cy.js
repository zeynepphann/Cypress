describe('Navigasyon',()=>{

    it.skip('back,forward,refresh',()=>{ 
        //skip yazdigimizda bu testi calistirmaz
        cy.visit('https://qa-environment.koalaresorthotels.com/') 
        cy.contains('Log in').click()

        cy.wait(2000)//2 sn bekle HARD WAIT

        cy.go('back')
        //onceki sayfaya git

        //cy.go(-1)
        //onceki sayfaya git

        cy.go('forward')
        //ileri sayfaya git

        cy.pause()
        //kodu durdurur
        
        cy.go(1)
        //ileri sayfaya git

        cy.reload()
        //sayfayi yeniden yukleme
    })

    it('zincirleme navigasyon',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/') 
        
        cy
        .contains('Log in')
        .click()
        .go('back')
        .go('forward')
        .go('back')

        cy.reload(true)
        .contains('Log in')
        .should("be.visible")

    })
})