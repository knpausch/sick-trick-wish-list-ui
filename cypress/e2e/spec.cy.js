describe('Visit site', () => {
  beforeEach(() => {
    cy.intercept('http://localhost:3001/api/v1/tricks', {
      method: 'GET',
      fixture: '../fixtures/example.json'
    })
    cy.visit('http://localhost:3000')
  })

  it('true should be true', () => {
    expect(true).to.equal(true)
  })
})
