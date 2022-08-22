describe('My First Test', () => {
    it('open website', () => {
        cy.visit('http://localhost:3000/');
    })
  })
  describe('checking total expenses ', () => {
    it('click month dropdown', () => {
    
  
cy.get('#demo-simple-select')
 .click();
})
  })
 
describe('dropdown data ', () => {
    it('click January', () => {
      cy.clock();
 cy.get('#menu- > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiPaper-root.MuiMenu-paper.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.css-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper > ul > li:nth-child(2)')
 .click();
 cy.tick(2000);
})
  })
 
 
  