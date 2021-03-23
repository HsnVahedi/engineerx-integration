describe("Basics", () => {
  it("successfully loads", () => {
    cy.visit('/');
  });
  it('requesting / redirects to /posts', () => {
    cy.visit("/");
    cy.url().should("include", "/posts");
  });
  it('successfully loads post pages', () => {
    cy.visit("/");
    cy.get("[role=post-link]").first().click().then((link) => {
      const url = Cypress.$(link).attr('href')
      cy.url({ timeout: 30000 }).should('contain', url)
      cy.get('[role=tags-section]').scrollIntoView({ duration: 30000 })
    })
  })
});


