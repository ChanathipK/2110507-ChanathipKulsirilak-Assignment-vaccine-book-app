describe('Hospitals', () => {
  it('should be able to play or pause video', () => {

    // cannot test, /hospital is server component, SSR

    // cy.intercept({
    //   method: "GET",
    //   url: "http://localhost:5000/api/v1/hospitals"
    // }, (req) => {
    //   delete req.headers['if-none-match']; 
    // }).as("getHospitals");

    // cy.visit("/hospital");
    // cy.wait(5000);
    // cy.wait("@getHospitals").should(({request, response}) => {
    //   expect(response?.statusCode).equal(200);
    //   expect(response?.body.data).be.not.null;
    //   expect(response?.body.data).to.have.length(response?.body.count);
    // })

    cy.visit("/");
    cy.wait(300);
    cy.get("video").should("exist")

    // somehow, I cannot get the property called "paused"
    // cy.get("video").should("have.length", 1).first().should("have.property", "paused");
    // cy.get("video").should("have.property","paused").should("be.false");

    cy.get("video").first().invoke("prop", "paused").should("be.false");

    cy.wait(5000);

    cy.get("button").contains("Pause").should("exist").click();

    cy.get("video").first().invoke("prop", "paused").should("be.true");

    cy.get("button").contains("View hospitals").should("exist").click();

    cy.wait(7000);

    cy.get("img").should("exist").should("have.length.at.least", 3);

  })
})