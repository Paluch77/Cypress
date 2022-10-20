/// <reference types="cypress" />

describe("E2E - Focus", () => {
  it("Focus", () => {
    cy.visit("/");
    cy.get('a[title="Dresses"]').eq(1).trigger("focus");
    cy.get('li.sfHover a[title="Summer Dresses"]').click();
  });
  it("Scrolling", () => {
    cy.get('[title="Specials"]').eq(0).scrollIntoView();
  });
});
