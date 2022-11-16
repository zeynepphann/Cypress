describe('Paylinn bank',()=>{

    before(function(){ // creds de olusturmus oldugumuz datalara ulasmak icin 
     cy.fixture('creds').then(function(data){
        this.data=data
      })   
    })

    it('paylinn login test',function(){
       cy.visit("https://paylinn.com/")
       cy.get('[href="/login"]').click() //or contains('Sing In').click()


       //username dogrulama  
       //value attiribute dogrulanacak cunku girilen yazi valueyu degerini degistiriyor 
       cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username)
       cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('have.attr','value',this.data.username) // attirbute de olan value degeri bizim girdigimiz value degerine esit mi diye kontrol ediliyor 

       //password dogrulama  
       cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.password)
       cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('have.attr','value',this.data.password)
 
      
       cy.get('.MuiButton-label').click()
       cy.get('.header__nav > :nth-child(1) > .header__lineOne').should('have.text',"Welcome")  /* or contains.text */ 
       
       //giris yapildigini assert edin
       cy.get('.header__nav').should('contains.text','Welcome').and('contains.text','React').and('contains.text','Logout').and('contains.text',this.data.username)

    })
})