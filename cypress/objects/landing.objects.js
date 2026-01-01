class HeroSection {
  constructor() {
    this.heroText = '[data-test=hero-text-2]';
    this.coordinatesText = '.font-mono.text-xs.md\\:text-sm';
    this.subText = '.font-hand.text-xl.md\\:text=3xl';
    this.svgGraphic = 'svg[viewbox="0 0 100 50"]'
      
  }

  visit() {
    cy.visit('http://localhost:5173/#');
  }

  getHeroText() {
    return cy.get(this.heroText)
  }

  getCoordinatesText() {
    return cy.get(this.coordinatesText)
  }

  getSubText() {
    return cy.get(this.subText)
  }

  getSvgGraphic() {
    return cy.get(this.svgGraphic)
  }

  verifyHeroTextSize() {
    this.getHeroText().should('have.css', 'font-size', '15vw');
    this.getHeroText().should('have.css', 'font-size', '8rem')
  }

  verifySubTextVisibility() {
    this.getSubText().should('contain.text', '(but like, on purpose)')
    this.getSvgGraphic().should('be.visible')
  }

  verifyTextStyles() { 
    this.getHeroText().find('span').should('have.css', '-webkit-text-stroke', '2px rgba(35, 35, 35')
  }

}