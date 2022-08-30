describe('checking total expenses ', () => {
    it('customer expense 11206', () => {
      cy.visit('http://localhost:3000/');
  
      cy.get('<td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignRight MuiTableCell-sizeMedium css-177gid-MuiTableCell-root">11206</td>')
  .invoke('text')
  .should('match', /^[0-9]*$/);
})
  })
  
  describe('checking total expenses ', () => {
    it('click second dropdown list', () => {
    
  cy.get('#root > div > div > div.MuiBox-root.css-1yuhvjn > div > div.MuiTableContainer-root.css-17zj9qc-MuiTableContainer-root > table > tbody > tr:nth-child(3) > td.MuiTableCell-root.MuiTableCell-body.MuiTableCell-sizeMedium.css-1ex1afd-MuiTableCell-root > button')
 .click()
})
  })
  describe('total reward ', () => {
    it('earn point 21950', () => {
    
  cy.get('#root > div > div > div.MuiBox-root.css-1yuhvjn > div > div.MuiTableContainer-root.css-17zj9qc-MuiTableContainer-root > table > tbody > tr:nth-child(3) > td:nth-child(4)')
  .invoke('text')
  .should('match', /^[0-9]*$/);
})
  })
  describe('checking text ', () => {
    it('Luis W Anderson', () => {
      
  cy.get('<th class="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-1ex1afd-MuiTableCell-root" scope="row">Luis W Anderson</th>')
  .invoke('text')
  .should('match', /^[a-zA-Z ]*$/
  );
})
  })