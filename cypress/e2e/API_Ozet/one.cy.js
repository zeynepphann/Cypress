describe('UserManagert API automation test',()=>{

    it('Get-list user',()=>{
    cy.request('GET','https://reqres.in/api/users?page=2').then((response)=>{
        expect(response.status).eq(200)    
        expect(response.body.data[0].first_name).eq("Michael")    
        })
    })

    it('Post-create user',()=>{
        var user={

            "name": "Zeynep",
            "job": "QA"
        }
    cy.request('POST','https://reqres.in/api/users',user).then((response)=>{
        expect(response.status).eq(201)    
        expect(response.body.name).eq(user.name)    
        expect(response.body.job).eq(user.job)    
        })
    })



    it('Update User',()=>{
        var user1={
            "name": "Zynp",
            "job": "blabla"
        }
        cy.request('PUT','https://reqres.in/api/users/2',user1).then((response)=>{
            expect(response.status).eq(200)
            expect(response.body.name).eq(user1.name)
            expect(response.body.job).eq(user1.job)
        })
       
    })



    it('Delete User',()=>{
    cy.request('DELETE','https://reqres.in/api/users/2').then((response)=>{
        expect(response.status).equal(204)
    })
       
    })
}) 