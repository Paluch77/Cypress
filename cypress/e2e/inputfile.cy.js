/// <reference types='cypress' />

describe("E2E - Input Photo", () => {
  it("Input", () => {
    cy.visit("/index.php?controller=contact");
    cy.get("#fileUpload").attachFile("../fixtures//photo.png");
    cy.get("span.filename").should("contain", "photo.png");
  });
});
