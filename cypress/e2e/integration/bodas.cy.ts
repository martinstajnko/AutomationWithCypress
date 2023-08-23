Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    return false;
  });


let urlBodas: string = 'https://www.bodas.net'

describe('Bodas', () => {
    beforeEach(() => {
        cy.viewport(1920, 1080) // Set viewport to 1920px x 1080px
        cy.visit(urlBodas)
        cy.wait(1000)
        cy.get('#onetrust-accept-btn-handler').click() // Accept cookies
    })

    // it('Check if page title matches', () => {
        
    //     cy.title().should('eq', 'Disfruta organizando tu boda - Bodas.net')
    // })

    // it('Search for specific thing and click search', () => {
        
    //     cy.get('.searcher__category > .searcher__input')
    //         .type('fotografo')
    //         .type('{enter}')

    //     cy.get('.searcher__submit').click()
        
    //     cy.get('.listingHeading__title').should('eq', 'fotografo')        
    // })

    it('Check if navbar exists', () => {
        
        let navbarLocator: string = '.layoutHeader__nav'
        cy.get(navbarLocator).should('exist')
    })

    it('Check if navbar contains more elements', () => {
        
        let navbarLocator: string = '.layoutHeader__nav'
        let expectedElementCount: number = 9
        cy.get(navbarLocator)
            .should('exist')
            .then((nav) => {
                cy.wrap(nav).find('ul')
                    .should('exist')
                    .find('li')
                    .should('have.length', expectedElementCount)
                // cy.wrap(nav).find('li')
                //     .should('have.length', expectedElementCount)
            })

    })
})  