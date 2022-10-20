/// <reference types="cypress" />

describe("E2E - Lesson", () => {
  it("Localizators", () => {
    cy.visit("/");

    // Tag
    cy.get("a");

    // ID
    cy.get("#search_query_top");

    // Class
    cy.get(".search_query");

    //Attribute
    cy.get('[name="search_query"]');
    cy.get('[placeholder="Search"]');

    //Better option attribute with tag
    cy.get('input[placeholder="Search"]');

    //More than one attribute
    cy.get(
      '[src="http://automationpractice.com/modules/themeconfigurator/img/banner-img6.jpg"][width="381"]'
    );

    //Common way to hold elements
  });
  it.only("Localizators - 2", () => {
    cy.visit("/");
    cy.contains("Shop now !");
    cy.contains('[title="Contact us"]', "Contact us");

    cy.get("li").parents("#home-page-tabs").find("li").eq(1);
    cy.get("li").parents("#home-page-tabs").find("li").contains("Best Sellers");
  });
});

//npx cypress open > //npm run open

//get - hold tags

//eq - index
