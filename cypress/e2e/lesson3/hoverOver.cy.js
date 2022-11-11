describe('hover over',()=>{
    it('move over',()=>{
    cy.visit('https://www.amazon.com/')
    cy.get('.icp-nav-link-inner > .nav-line-2 > .nav-icon').trigger('mouseover')   
    //trigger()=> mouse'u hareket ettirir
    //change country/region

    cy.contains('Change country/region').click()
    cy.wait(2000)

    //select Canada 
    cy.get('.a-dropdown-prompt').click()
    cy.get('#icp-dropdown_3').click()
    // cy.get('#icp-selected-country').select('Canada',{force: true}) 
    //! dropdown elementini acmaya zorlamak icin kullanilir

   }) 
})