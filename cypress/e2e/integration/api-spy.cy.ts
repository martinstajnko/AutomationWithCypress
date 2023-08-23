describe('API Intercept Test', () => {
    beforeEach(() => {
        cy.visit('https://www.youtube.com/')
        cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
    })

    it('Paste search text and click enter', () => {
        cy.get('[name="search_query"]').type('Mama Mia').type('{enter}')

        // Wait for an element with the given selector to appear in the DOM
        cy.get('yt-showing-results-for-renderer.style-scope').should('be.visible') 

        // Get the text of the element and compare
        cy.get('yt-showing-results-for-renderer.style-scope')
        .invoke('text')
        .should('include', 'Mama Mia')

        cy.request
    
    })
})  