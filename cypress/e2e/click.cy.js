/// <reference types="cypress" />

describe("E2E - Click", () => {
  it("Click on element", () => {
    cy.visit("/");
    cy.contains(
      '[href="http://automationpractice.com/index.php?controller=contact"]',
      "Contact us"
    ).click();
    cy.get('[title="Return to Home"]').click();
  });
});
