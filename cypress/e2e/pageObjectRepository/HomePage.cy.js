class HomePage{
    getSigninLink(){
        return cy.get('[href="/login"]')
    }  
}

export default HomePage