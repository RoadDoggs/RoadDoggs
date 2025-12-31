/* eslint-disable no-undef */
class LandingHeader {
  elements = {
    heroText1: () => cy.get("[data-test=hero-text-1]"),
    heroText2: () => cy.get("[data-test=hero-text-2]"),
    planTripButton: () => cy.get("[data-test=plan-trip-button]"),
    images: () => cy.get("img"),
  };

  checkResponsiveDesign() {
    const sizes = ["iphone-6", "ipad-2"];
    sizes.forEach((size) => {
      cy.viewport(size);
      this.elements.heroText2().should("be.visible");
      this.elements.planTripButton().should("be.visible");
    });
  }

  checkPlanTripButton() {
    this.elements
      .planTripButton()
      .should("be.visible")
      .and("be.enabled")
      .click();
  }

  checkHeroText2() {
    this.elements
      .heroText2()
      .should("contain.text", "GET LOST")
      .and("be.visible");
  }

  checkImagesLoad() {
    this.elements.images().each((image) => {
      cy.wrap(image)
        .should("be.visible")
        .and(($img) => {
          expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });
  }

  checkBackgroundText() {
    this.elements
      .heroText1()
      .should("contain.text", "Are we there yet?")
      .and("have.css", "pointer-events", "none");
      this.elements.heroText2()
        .should("contain.text", "No Signal. Good.")
        .and("have.css", "pointer-events", "none");
  }

  attemptClickBackgroundText() {
    this.elements
      .heroText1()
      .click({ force: true })
      .should("have.css", "pointer-events", "none");
    cy.contains("No Signal. Good.")
      .click({ force: true })
      .should("have.css", "pointer-events", "none");
  }
}

class ManifestoSection {
  constructor() {
    this.manifestoTitle = "[data-test=manifesto-title]";
    this.manifestoItem1 = "[data-test=manifesto-item-1]";
    this.manifestoItem2 = "[data-test=manifesto-item-2]";
    this.descriptiveText1 = ":nth-child(1) > .text-gray-600";
    this.descriptiveText2 = ":nth-child(2) > .text-gray-600";
  }

  visit() {
    cy.visit("/");
  }

  getManifestoTitle() {
    return cy.get(this.manifestoTitle);
  }

  getManifestoItem1() {
    return cy.get(this.manifestoItem1);
  }

  getManifestoItem2() {
    return cy.get(this.manifestoItem2);
  }

  getDescriptiveText1() {
    return cy.get(this.descriptiveText1);
  }

  getDescriptiveText2() {
    return cy.get(this.descriptiveText2);
  }
}

export {LandingHeader, ManifestoSection}