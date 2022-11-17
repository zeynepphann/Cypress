import HomePage from '../pageObjectRepository/HomePage.cy'
import LoginPage from '../pageObjectRepository/LoginPage.cy'
/// <reference types="Cypress" />

describe('Paylinn bank',()=>{

    before(function(){ // creds de olusturmus oldugumuz datalara ulasmak icin 
     cy.fixture('creds').then(function(data){
        this.data=data
      })   
    })
      

    it('paylinn login test',function(){


       //objeler
       const homePage = new HomePage()
       const loginPage = new LoginPage()
       cy.visit("https://paylinn.com/")


       homePage.getSigninLink().click()
       
       loginPage.getUserNameBox().type(this.data.username)
       //cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(this.data.username)

       loginPage.getUserNameBox().should('have.attr','value',this.data.username)
 
       loginPage.getPasswordBox().type(this.data.password)
       //cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').should('have.attr','value',this.data.password)
 
      
       loginPage.getLoginButton().click()
       loginPage.getLoginButton().should('be.visible',)  /* or contains.text */ 
       
       //giris yapildigini assert edin
       loginPage.getNavbarHeader().should('contains.text','Welcome').and('contains.text','React').and('contains.text','Logout').and('contains.text',this.data.username)

    })
})