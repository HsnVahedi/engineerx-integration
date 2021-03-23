const goToNextPage = (page) => {
  cy.get('button[aria-label="Go to next page"]').then(
    (button) => {
      if (!(Cypress.$(button)).is(":disabled")) {
        button.click()
        cy.url({ timeout: 30000 }).should('contain', `page=${page + 1}`)
        goToNextPage(page + 1)
      }
    }
  )
}

describe("Pagination", () => {
  it('we can visit all pages using next page button', () => {
    cy.visit('/');
    goToNextPage(1);
  })
});