describe('multiple windows',()=>{

    //? acilan pencereyi ayni sekmede acma yontemleri 

    //! 1
    it.skip('removing target',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click() //target icindeki attiribute'u cikar ve tikla. 
        //Target icinde baska bir sayfaya gidildigi icin silindiginde yeni bir sayfaya gitmez. 
        cy.get('h3').should('have.text','New Window')
    })

    //! 2
    it('yeni url de acma',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy
        .get('.example > a')
        .then((element)=>{
          const newUrl = element.prop('href')
          //prop() ile 'href' degerini aldik
          //prop()-> jquery attribute degerini alan bir method 
          cy.visit(newUrl)
        })
          cy.get('h3').should('have.text','New Window')

    })





})