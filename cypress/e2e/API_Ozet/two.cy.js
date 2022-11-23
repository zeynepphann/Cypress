describe('API Automation Test Suite',()=>{

    it('GET all employee',()=>{
        cy.request({
        method: "GET",
        url : "https://qa-practice.herokuapp.com/api/v1/employees"
        }).as('getAllRequest')
      
        cy.get('@getAllRequest').then((response)=>{
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))
        })
    })

    it('Post API',()=>{
       
        cy.request({
            method: "POST",
            url : "https://qa-practice.herokuapp.com/api/v1/employees",
            body: {
                "dob": "1994-05-06",
                "email": "1@gmail.com",
                "firstName": "zynp",
                "id": 1222,
                "lastName": "zynp1"
            }
            }).as('postRequest')
          
            cy.get('@postRequest').then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body))
            })



        var user = {
            "dob": "1994-05-06",
            "email": "1@gmail.com",
            "firstName": "zyrnp",
            "id": 1222,
            "lastName": "zynp1"
        }



        cy.request("POST", "https://qa-practice.herokuapp.com/api/v1/employees",user).then((response)=>{
            console.log(`response`, response)
            expect(response.status).eq(201)
         
         
        cy.request("https://qa-practice.herokuapp.com/api/v1/employees")
        .its('requestBody')
        .should('include',{email: "1@gmail.com"})

           
            //expect(response.body).to.have.property('requestBody').and.to.be.include("{\"dob\":\"1994-05-06\",\"email\":\"1@gmail.com\",\"firstName\":\"zyrnp\",\"id\":1222,\"lastName\":\"zynp1\"}")
            //expect(response.requestBody).to.have.property('email')
            //expect(response.response).to.eq('1@gmail.com')
            // expect(response.requestBody).to.eq('1@gmail.com')
            // expect(response.requestBody).has.property('email',"1@gmail.com")
            //expect(res.body.data).has.property('email', 'naveenCypressuser@gmail.com')
        }) 
 



    })
})