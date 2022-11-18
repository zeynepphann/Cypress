//!
const dataJson = require('../../fixtures/createuser')
//!
describe('post user request', () => {

    let accessToken = '9bfcd11e0b4dbb88447be112af8d70956c4f3c80f11f34cf201353692ee06803'
    let randomText = ""
    let testEmail = ""


    it('create user test', () => {

        var pattern = "ABCDEFGHXIJKQLMNOPRSTUVYZabcdefgxijkqlmnoprstuvyz"


        for (var i = 0; i < 10; i++)
            randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail = randomText + '@gmail.com'

        //! Bu ne
        cy.fixture('createuser').then((payload) => {
            cy.request({
                method: 'POST',
                url: 'https://gorest.co.in/public/v2/users',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                },
                body: {
                    "name": payload.name,
                    "gender": dataJson.gender,
                    "email": testEmail,
                    "status": dataJson.status

                }
            }).then((res) => {
                cy.log(JSON.stringify(res)) // string olarak console da yazdirmak icin 
                expect(res.status).to.eq(201);
                /* 
                expect(res).property('body').to.contain({"name": "zeyno"})
                expect(res).property('body').to.contain({"gender": "female"})
                expect(res).property('body').to.contain({"email": testEmail})
                expect(res).property('body').to.contain({"status": "active"})
               */

                expect(res.body).has.property('email', testEmail) //1.
                expect(res.body).has.property('name', payload.name)//2.
                expect(res.body).has.property('gender', dataJson.gender)//3.
                expect(res.body).has.property('status', 'active') //4.

                return Promise.resolve(res);
            })
            .then((res) => {
                const userId = res.body.id;
                console.log("user id is:" + userId);
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/' + userId,
                    headers: {
                        'Authorization': "Bearer " + accessToken
                    }
                }).then((res) => {
                    expect(res.status).to.eq(200)
                })
            })

        })

    })
})