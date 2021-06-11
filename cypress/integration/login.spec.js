describe('Login form', () => {
    beforeEach(() => { cy.visit('/') })

    it('focuses email input on load', () => {
        cy.focused()
            .should('have.class', 'form-input-email')
    })

    context('Login form submission', () => {

        it('accepts input', () => {
            const email = 'subhash@gmail.com'
            const password = 'password'

            cy.get('.form-input-email')
                .type(email)
                .should('have.value', email)

            cy.get('.form-input-password')
                .type(password)
                .should('have.value', password)
        })

        it('Post login credentials to api for validation', () => {
            cy.intercept('POST', '/api/login', {
                email: 'valid',
                password: 'valid',
                success: 'true'
            })

            cy.get('.form-input-submit')
                .click()
        })
    })
})