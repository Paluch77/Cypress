/// <reference types='cypress' />

describe("E2E - Input Actions", () => {
  it("Input value", () => {
    cy.visit("/");
    cy.get("#search_query_top").type("Example product {backspace}", {
      delay: 500,
    });
  });
  it("Clearing input window", () => {
    cy.get("#search_query_top").clear();
  });
});

//type - input phrase
