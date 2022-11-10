describe('empty spec', () => {
    //describe('isim),'test icin olusturulacak fonksiyonlar')

    it('passes', () => {
        //testi tanimliyoruz. @test gibi

        //url adresinde google var mi? 
        cy.visit('https://www.google.com/')
        //visit('site adresi') siteye gider

        cy.url().should('include','google')
        //url() url testi yapilacagi zaman kullanilir  
        //should('iceriyormu','xxxx')
         })



        //2.test


        it('Title test ',()=>{
        //title da google var mi?
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
        })
    



  })