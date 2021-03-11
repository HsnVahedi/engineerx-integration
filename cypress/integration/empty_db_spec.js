describe("Empty database", () => {
    it('requesting /posts returns 404', () => {
        cy.request({ url: "/posts", failOnStatusCode: false }).should((response) => {
            expect(response.status).to.eq(404)
        });
    });
})