describe('API Test',()=>{

    it('Header dogrulama',()=>{
       cy.request('https://pokeapi.co/api/v2/pokemon/1')
       .its('headers')
       .its('content-type') 
       .should('include','application/json; charset=utf-8')     
    })


    it('Header dogrulama 2',()=>{
        cy.request({
            url: 'https://pokeapi.co/api/v2/pokemon/1',
            method: 'GET'
        }).then((response)=>{
            expect(response.headers).to.have.property('content-type').and.to.be.include('application/json; charset=utf-8')
        })
    })



    it('Status dogrulama',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('status')
        .should('eq',200)     
    })
 
 
    it('Status dogrulama 2',()=>{
         cy.request({
             url: 'https://pokeapi.co/api/v2/pokemon/1',
             method: 'GET'
         }).then((response)=>{
             expect(response.status).to.eq(200)
        })
    })


    it('Body Name dogrulama',()=>{
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('body')
        .should('include',{name:'bulbasaur'})     
    })
 
 
    it('Body Name dogrulama 2',()=>{
         cy.request({
             url: 'https://pokeapi.co/api/v2/pokemon/1',
             method: 'GET'
         }).then((response)=>{
             expect(response.body).to.be.include({name: 'bulbasaur'})
        })
    })
 
    //negatif 
    it.skip('Body Name dogrulama 2',()=>{
        cy.request({
             url: 'https://pokeapi.co/api/v2/pokemon/1',
             method: 'GET',
             auth:{
                username: 'test',
                password: 'test123'
            }

        }).then((response)=>{
             expect(response.body).to.eq(200)
        })
    })

})