describe('Newegg E-commerce Website', () => {
    beforeEach(() => {
      cy.visit('https://www.newegg.com/');
    });
  
    it('Successful Product Search and Add to Cart', () => {
      cy.get('input[type="search"]').type('gaming pc{enter}');
      cy.url().should('include', 'Search');
      cy.get('.item-cell').first().click();
      cy.get('.product-title').should('be.visible');
      cy.get('.btn-primary').contains('Add to cart').click();
      cy.get('.cart-message').should('contain', 'Added to Cart');
    });
  
    it('Search with No Results', () => {
      cy.get('input[type="search"]').type('124--$%2664174000{enter}');
      cy.url().should('include', 'Search');
      cy.get('.result-message').should('contain', 'No results found');
    });
  });