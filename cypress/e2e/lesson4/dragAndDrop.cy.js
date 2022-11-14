import '@4tw/cypress-drag-drop'
//? npm install --save-dev @4tw/cypress-drag-drop   linki 

describe('Drag and drop',()=>{
    it.skip('double click',()=>{
       //double click yapilacak sayfa yok cy.get('locate).dblclick() method bu 
       //right click yapilacak sayfa yok cy.get('locate).right click() method bu 

       cy.on('window:alert',(str)=>{ //double click'den sonra alert cikiyor onun assertioni

        // assert
        //!1
        expect(str).to.equal('hi, JavaTpoint Testing')
        //!2
        expect(str).to.eq('hi, JavaTpoint Testing')
        //!3
        expect(str).to.contains('hi, JavaTpoint Testing')

       })

    })

    
    
    it('drag and drop',()=>{
         cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
         cy.get('#column-a')//suruklenecek element locate'i 
         .drag('#column-b')//suruklenecek yerin locate'i 
    })
  

})     

