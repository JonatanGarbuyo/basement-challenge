/// <reference types="Cypress" />

describe("Basement App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should render the front page", () => {
    cy.contains(/basement/i);
  });

  describe("user can open/close the cart", () => {
    it("should render the cart when Cart button is clicked", () => {
      cy.get('[aria-label="cart button"]').click();
      cy.contains(/is empty/i);
    });
    it("should hide the cart component when Close button is clicked", () => {
      cy.get('[aria-label="cart button"]').click();
      cy.get("#itemsList > p").as("cartContent");
      cy.get('[aria-label="close cart"]').click();
      cy.get("@cartContent").should("not.exist");
    });
  });

  describe("user could add an element in the cart", () => {
    it("should have a button to add to cart", () => {
      cy.get("article").within(() => {
        cy.get("div").first().trigger("mouseover");
        cy.get('[aria-label="add to cart"]').first().click();
      });
      cy.get('[aria-label="cart button"]').contains("cart (1)");
    });
  });

  describe("user can see and interact with the products items in the cart", () => {
    beforeEach(() => {
      // add one product to cart
      cy.get("article").within(() => {
        cy.get("div").first().trigger("mouseover");
        cy.get('[aria-label="add to cart"]').first().click();
      });
      // show the cart content
      cy.get('[aria-label="cart button"]').click();
    });

    it("should show the item in cart", () => {
      cy.get("#itemsList")
        .should("not.contain", /is empty/i)
        .should("have.length", 1);
    });
    it("should delete the item in cart", () => {
      cy.get('[aria-label="remove item"]').click();
      cy.get("#itemsList").contains(/is empty/i);
      cy.contains(/total:/i);
    });

    it("should have a button to increment the item quantity in cart", () => {
      cy.get('[aria-label="increment quantity"]').click();
      cy.get('[aria-label="product quantity"]').contains(2);
    });
    it("should have a button to decrement the item quantity in cart", () => {
      cy.get('[aria-label="increment quantity"]').click(); // increment quantity to 2

      cy.get('[aria-label="decrement quantity"]').click();
      cy.get('[aria-label="product quantity"]').contains(1);
    });
    it("should remove item if decrement the item quantity to zero", () => {
      cy.get('[aria-label="decrement quantity"]').click();
      cy.contains(/is empty/i);
    });

    it("should have a button to change the item size", () => {
      cy.get("[aria-label^=size]") // aria label name starts with size
        .last()
        .click()
        .should("have.attr", "class")
        .and("match", /border-1/);
    });

    it("should have a button to checkout the purchase", () => {
      cy.get('[aria-label="checkout"]').click();
    });
  });
});
