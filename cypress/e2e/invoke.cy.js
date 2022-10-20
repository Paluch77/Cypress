/// <reference types="cypress" />

describe("E2E Invoke", () => {
  it("Invoke", () => {
    cy.visit("/");

    // Get element value
    cy.get('[title="Contact Us"]')
      .invoke("text")
      .then((text) => {
        cy.log(text);
      });

    // Getting access to attribute value

    cy.get('[title="Contact Us"]')
      .invoke("attr", "href")
      .then((link) => {
        cy.log(link);
      });

    // Getting value
    cy.get("#search_query_top")
      .type("Przykladowa wartosc")
      .invoke("prop", "value")
      .then((value) => {
        cy.log(value);
      });
  });
});
