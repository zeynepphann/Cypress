describe('file upload',()=>{

    it.skip('tek dosya yukleme',()=>{
       cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
       cy.get('#filesToUpload').attachFile('aslan2.jpeg')

       //assert
       //1
       cy.get('#fileList > li').should('include.text','aslan2.jpeg')

       //2
       cy.contains("aslan2.jpeg").should('be.visible')
    })

   
    it.skip('coklu dosya yukleme',()=>{
    cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

    const path1 ='aslan2.jpeg'
    const path2 ='img2.jpg'
    const path3 ='js_logo.png'

    cy.get('#filesToUpload').attachFile(path1).attachFile(path2).attachFile(path3)
    
    })

    it.skip('coklu dosya yukleme',()=>{
         cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')

        //1.yontem
        /* cy.get('#filesToUpload').attachFile(['aslan2.jpeg','img2.jpg','js_logo.png'])  */

        //2. yontem
        const path1 ='aslan2.jpeg'
        const path2 ='img2.jpg'
        const path3 ='js_logo.png'
    
        cy.get('#filesToUpload').attachFile([path1,path2,path3])
        
    })

    //ISIM DEGISTIRMEK ICIN 
    it('override file name',()=>{
         cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
         const path1 ='aslan2.jpeg'
         cy.get('#filesToUpload').attachFile({filePath: path1, fileName: 'Resim'})
         cy.contains('Resim').should('be.visible')//1
         cy.get('#fileList > li').contains('Resim').should('be.visible') //2
    })

   
})