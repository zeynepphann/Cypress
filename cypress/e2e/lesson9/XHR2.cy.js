describe('XHR - XML,HTTP,Request',()=>{
    // XHR javascript ile sunulmus bir APIdir 
    // Web sitesini es zamanli olarak arka planda calisan olaylari takip eder.
    const requestUrl="https://jsonplaceholder.cypress.io/comments"
    
    
        it('XHR Example 2',()=>{

           cy.request('POST', requestUrl, {
            userId:501,
            title: "Cypress json",
            body: "JS"

            }).then((response)=>{
             console.log(response);
             expect(response.status).to.eq(201)
             expect(response).property('body').to.contain({title: "Cypress json"})
             expect(response.body).property('userId').to.be.a('number')  // userId numara mi?            
             
            })
    
        })
    })