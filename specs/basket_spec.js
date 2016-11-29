var basket = require('../basket');
var assert = require('assert');

describe( "basket", function() {

  it("can find the total price", function() {
    assert.equal(427.50, basket.totalPrice(true));
  });

  it("basket has a number of items", function() {
    assert.equal(5, basket.items.length);
     });

  it("basket can add an item", function() {
    basket.addToBasket({name: "Pizza", price: 2.00})
    assert.equal(6, basket.items.length);
     });

  it("basket can remove last item", function() {
    basket.removeLastItem();
    assert.equal(5, basket.items.length);
     });

  it("basket can remove any item", function() {
    basket.removeItemByName("Nature Valley")
    assert.equal(4, basket.items.length);
     });

  it("can add bogof item", function() {
    basket.bogof();
    assert.equal(5, basket.items.length);
  });

});