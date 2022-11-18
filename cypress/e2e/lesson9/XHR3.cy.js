describe('XHR - XML,HTTP,Request',()=>{
    // XHR javascript ile sunulmus bir APIdir 
    // Web sitesini es zamanli olarak arka planda calisan olaylari takip eder.
    const requestUrl="https://jsonplaceholder.cypress.io/comments"
    
        it('XHR Example 3',()=>{
            cy.visit('https://example.cypress.io/commands/waiting')   
            cy.intercept('GET','/**comments/*').as('getComment') 
            //as-> degisken olarak atiyor . daha sonra @ ile kullanilir 
            cy.get('.network-btn').click()
            cy.wait('@getComment').its('response').then((response)=>{
            console.log(response);
            })
        })
    })