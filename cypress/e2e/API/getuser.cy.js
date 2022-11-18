describe('get api user tests',()=>{

    let accessToken='a8edbf023462229d4b1a81b3d76d6bc7cf69c0d96e8eb26799ec2ed7d71fad3f'

    it('get users',()=>{
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users' ,
            headers : {
                'authorization' : "Bearer " + accessToken
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
        })
    })



        it('get users by id test ',()=>{
           
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/1503' ,
                headers : {
                    'authorization' : "Bearer " +accessToken
                }
            }).then((res)=>{
                expect(res.body.status).to.eq('active')
            })
        })
  




})