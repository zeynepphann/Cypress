// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//Cypress.Commands.add -> komut ekle, tanimla 



 Cypress.Commands.add('login',(email,password) =>{ // sablon method gibi
    cy.visit("https://automationexercise.com/")
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#Submit').click()
}) 


//amazon search

Cypress.Commands.add('amazonSearch',(productName)=>{
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type(productName)
    cy.get('#nav-search-submit-button').click()
})

import 'cypress-file-upload'

//custom command for clicking on link using label
Cypress.Commands.add('clickLink',(label)=>{
    cy.get('a').contains(label).click()
})


//over write contains()

Cypress.Commands.overwrite('contains',(originalFn,subject, filter,text,options={})=>{
    if(typeof text== 'object'){
        options = text
        text =filter
        filter=undefined
    }

    options.matchCase= false
    return originalFn(subject,filter,text,options)
})


//Custom command for login 

Cypress.Commands.add("loginapp",(email,password)=>{
    cy.get('#Email').type(email)
    cy.get('#Password').type(password)
    cy.get('form > .buttons > .button-1').click()
})