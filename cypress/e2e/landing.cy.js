/* eslint-disable no-undef */
import { LandingHeader, ManifestoSection } from '../objects/landing.objects'



describe('Hero Section', () => {
    const landingHeader = new LandingHeader()

    beforeEach(() => cy.visit('/'))

    it('displays correctly', () => {
        landingHeader.checkResponsiveDesign() 
    })

    it("correctly displays the 'Plan Trip' button", () => {
        landingHeader.checkPlanTripButton()
    });

    it('Displays the text "Get Lost" correctly', () => { 

    landingHeader.checkHeroText2()
    });

    it('Displays the images correctly', () => {
        landingHeader.checkImagesLoad()
    });


    it('Attempts to click the background text', () => {
        landingHeader.attemptClickBackgroundText()
    });

})

