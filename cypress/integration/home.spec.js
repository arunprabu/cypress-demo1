/// <reference types="cypress" />

context('Home Page works properly', () => {
  it('should have h1', ()=> {

    cy.visit('http://localhost:3000');

    cy.get('h1').should('exist');
    cy.findByText('Welcome');
  });

  it('should have form and should work well', () => {
    cy.visit('http://localhost:3000');
    cy.get('#input1').type('arun');
    cy.get('#input2').type('vj');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert',(txt)=>{
      //const stub = cy.stub()
      // if you are submitting the form and getting the resp
   })
  });

});
