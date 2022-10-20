/// <reference types="cypress" />

describe("E2E - Select", () => {
  it("Select action", () => {
    cy.visit("/index.php?id_category=3&controller=category");

    // Name
    cy.get("#selectProductSort").select("Product Name: A to Z");

    // Value
    cy.get("#selectProductSort").select("name:asc");

    //Index
    cy.get("#selectProductSort").select(7);
  });

  it.only("Select whole options", () => {
    cy.visit("/index.php?id_category=3&controller=category");
    cy.get("#selectProductSort").then((select) => {
      cy.wrap(select)
        .find("option")
        .each((option) => {
          cy.wrap(select).select(option.text());
        });
    });
  });
});
