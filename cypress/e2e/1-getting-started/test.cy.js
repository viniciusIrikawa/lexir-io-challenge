describe('Test Ecommerce', () => {
    it('Visit the page' , () => {
        cy.visit('http://localhost:3000')
    })

    it('Filter by vodka' , () => {
        cy.get(':nth-child(2) > div > :nth-child(3)').click()
    })

    it('Buy a vodka', () => {
        cy.get(':nth-child(1) > .contentWrapper > .py-1').click()
    })
    
})