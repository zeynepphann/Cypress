describe('file upload',()=>{

    it('tek dosya yukleme',()=>{
       cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       cy.get('#filesToUpload').attachFile('aslan2.jpeg')

       //assert
       //1
       //cy.get('#fileList > li').should('include.text','aslan2.jpeg')

       //2
       cy.contains("aslan2.jpeg").should('be.visible')


    })
})