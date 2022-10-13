describe('Ecommerce', () => {
    it('Visit the page' , () => {
        cy.visit('http://localhost:3000')
    })

    it('Filter by Vodka' , () => {
        cy.get(':nth-child(3) > :nth-child(2) > div > :nth-child(3)').click()
    })

    it('Add Vodka to the cart', () => {
        cy.get(':nth-child(1) > .contentWrapper > .py-1').click()
        cy.get(':nth-child(2) > .contentWrapper > .py-1').click()
        cy.get(':nth-child(3) > .contentWrapper > .py-1').click()
        cy.get(':nth-child(4) > .contentWrapper > .py-1').click()
        cy.get('.counterItems').contains('4')
    })

    it('Filter by Gin' , () => {
        cy.get('.border-solid > :nth-child(3) > :nth-child(2) > div > :nth-child(2)').click()
    })

    it('Add Gin to the cart', () => {
        cy.get(':nth-child(1) > .contentWrapper > .py-1').click()
        cy.get(':nth-child(2) > .contentWrapper > .py-1').click()
        cy.get(':nth-child(3) > .contentWrapper > .py-1').click()
        cy.get(':nth-child(4) > .contentWrapper > .py-1').click()
        cy.get('.counterItems').contains('8')
    })

    it('Filter all items', () => {
        cy.get('.border-solid > :nth-child(3) > :nth-child(2) > div > :nth-child(1)').click()
    })

    it('Open the cart', () => {
        cy.get(':nth-child(4) > .my-1').click()
        
    })
})