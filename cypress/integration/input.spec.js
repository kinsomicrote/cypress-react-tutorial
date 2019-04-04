describe('Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it focuses the input', () => {
    cy.focused().should('have.class', 'form-control')
  })

  it('accepts input', () => {
    const input = "Learn about cypress"
    cy.get('.form-control')
      .type(input)
      .should('have.value', input)
  })

  it('displays list of todo', () => {
    cy.get('li')
      .should('have.length', 2)
  })

  it('adds a new todo', () => {
    const input = "Learn about cypress"
    cy.get('.form-control')
      .type(input)
      .type('{enter}')
      .get('li')
      .should('have.length', 3)
  })
})