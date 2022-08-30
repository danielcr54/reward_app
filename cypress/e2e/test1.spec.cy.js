describe('My First Test', () => {
  it('Visits my website', () => {
    cy.visit('http://localhost:3000/');

    cy.contains('Customer and their Reward points')

  })
})
describe('My second Test', () => {
  it('open menu bar', () => {
    cy.get('#root > div > header > div > div > div.MuiBox-root.css-2uchni > button > div').click();
  })
})