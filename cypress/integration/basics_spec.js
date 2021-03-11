describe("Basics", () => {
  it('requesting / redirects to /posts', () => {
    cy.visit("/");
    cy.url().should("include", "/posts");
  });
});


