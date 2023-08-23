let youtubeUrl: string = 'https://www.youtube.com'


describe('Simple YT test', () => {
    beforeEach(() => {
        cy.visit(youtubeUrl)
        cy.get('.eom-buttons > :nth-child(1) > :nth-child(1) > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
    })

    it('Check if page title patches', function() {
        cy.title().should('include', 'YouTube')
    })

    it('Paste search text and click enter', () => {
        cy.get('[name="search_query"]').type('Mama Mia').type('{enter}')

        // Wait for an element with the given selector to appear in the DOM
        cy.get('yt-showing-results-for-renderer.style-scope').should('be.visible') 

        // Get the text of the element and compare
        cy.get('yt-showing-results-for-renderer.style-scope')
        .invoke('text')
        .should('include', 'Mama Mia')

        // let message = cy.get('yt-showing-results-for-renderer.style-scope')
        
        // message.should('include', 'Mama Mia')

        // cy.request
    
    })
})  