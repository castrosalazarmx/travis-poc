import { incorrectData, correctData }  from '../dataProviders/dataProvider.js'

describe('Basic Login App', function(){
  it('Login button', function(){
    cy.visit('http://testapp.galenframework.com')
    cy.contains('Login').click()
  })

  it('Incorrect Credentials', function(){
    incorrectData.forEach(incorrectData => {
    cy.get('input[name="login.username"]').clear().type(incorrectData.user)
    cy.get('input[name="login.password"]').clear().type(incorrectData.pass)
    cy.get('.button-login').click()
    cy.get('.alert-danger').should('be.visible')
      .and('contain', 'The username or password are incorrect')
    })
  })

  it('Correct Credentials', function(){
    cy.get('input[name="login.username"]').clear().type(correctData.user)
    cy.get('input[name="login.password"]').clear().type(correctData.pass)
    cy.get('.button-login').click()
    cy.get('.alert-danger').should('not.be.visible')
    cy.get('h2').should('contain', 'My Notes')
  })

  it('Write a note', function(){
    cy.get('h2').should('contain', 'My Notes')
    cy.get('.btn').should('contain', 'Add note').click()
    cy.get('input[name="note.title"]').type('Automated note title')
    cy.get('textarea[name="note.description"]').type('Automated note description')
    cy.get('.btn-primary').should('contain', 'Add Note').click()
    cy.get('.list-group').within(() => {
      cy.contains('Automated note title').should('be.visible')
    })
  })

  it('Edit my note', function(){
    cy.get('.list-group').within(() => {
      cy.contains('Automated note title').click()
    })
    cy.get('textarea[name="note.description"]').clear().type('Edited note description')
    cy.get('.btn-primary').should('contain', 'Save').click()
    cy.get('.list-group').within(()  => {
      cy.contains('Edited note description').should('be.visible')
    })
  })

})
