describe('My First Test', () => {
  it('Visits my website', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Customer and their Reward points')

    cy.get(
      '#root > div > div > div.MuiBox-root.css-1yuhvjn > div > div.MuiTableContainer-root.css-17zj9qc-MuiTableContainer-root > table > tbody > tr.MuiTableRow-root.css-2blr9s-MuiTableRow-root > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeMedium.css-1ex1afd-MuiTableCell-root > button')
      .should('be.visible')
      .click();
  })

 

})
describe('My second Test', () => {
  it('check text', () => {
    cy.get('#root > div > header > div > div > div.MuiBox-root.css-2uchni > button > div').click();
   })
})