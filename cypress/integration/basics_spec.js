const goToNextPage = (page) => {
  cy.get('button[aria-label="Go to next page"]').then(
    (button) => {
      if (!(Cypress.$(button)).is(":disabled")) {
        button.click()
        cy.url({ timeout: 30000 }).should('contain', `page=${page + 1}`)
        // cy.reload()
        goToNextPage(page + 1)
      }

      // if ((Cypress.$(button)).is(":disabled")) {
      //   return;
      // } else {
      //   button.click()
      //   console.log('@@@@@@@@@@@@@')
      //   goToNextPage();
      // }
    }
  )
}

describe("Basics", () => {
  it('requesting / redirects to /posts', () => {
    cy.visit("/");
    cy.url().should("include", "/posts");
  });
  it('we can visit all pages using next page button', () => {

    cy.visit('/');
    goToNextPage(1);
  })
});


