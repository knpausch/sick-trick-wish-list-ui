describe('Visit site', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      method: 'GET',
      fixture: '../fixtures/example.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('Should verify display of title, stance menu, name textbox, obstacle menu, link texbox, submit button, and 1 trick card', () => {
    cy.get('h1').contains('Sick Trick Wish List')
    cy.get('#trickStance').contains('Choose your Stance')
    cy.get('#name').should('have.attr', 'placeholder', 'Name of Trick')
    cy.get('#trickObstacle').contains('Choose your Obstacle')
    cy.get('#tutorial').should('have.attr', 'placeholder', 'Link to Tutorial')

    cy.get('button').contains('Send It!')
    cy.get('h2').contains('regular treflip')
    cy.get('p').contains('Obstacle: flat ground')
    cy.get('p').contains('Link To Tutorial:')
    cy.get('a').contains('https://www.youtube.com/watch?v=XGw3YkQmNig')
  })

  it('Should take inputs from user, update inputs, and generate a new trick card', () => {
    cy.get('#trickStance').select('regular')
    cy.get('#trickStance').contains('regular')

    cy.get('#name').type('cool doggo')
    cy.get('#name').should('have.value', 'cool doggo')
    
    cy.get('#trickObstacle').select('flatground')
    cy.get('#trickObstacle').contains('flatground')

    cy.get('#tutorial').type('youtube.com')
    cy.get('#tutorial').should('have.value', 'youtube.com')

    cy.get('button').click()

    cy.get('h2').contains('regular cool doggo')
    cy.get('p').contains('Obstacle: flatground')
    cy.get('p').contains('Link To Tutorial:')
    cy.get('a').contains('youtube.com')
  })
})
