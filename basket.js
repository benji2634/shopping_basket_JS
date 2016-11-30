var basket = {
  items: [
{ name: "Pepperoni",
  price: 2.00,
  isBogof: true
},
{ name: "Pepperoni",
  price: 2.00,
  isBogof: true
},
{ name: "Milk Tray",
price: 2.00,
isBogof: false
},
{ name: "Nature Valley",
price: 3.00,
isBogof: false
},
{ name: "Chicken Fillets",
price: 3.00,
isBogof: false
},
{ name: "4K TV",
price: 490.00,
isBogof: false
}
],
addToBasket: function(item) {
  this.items.push(item);
},
removeLastItem: function() {
  this.items.pop();
},
removeItemByName: function(itemName) {
  for (var index in this.items) {
    if (this.items[index].name === itemName) {
      this.items.splice(this.items[index], 1);
    }
  }
},
totalPrice: function(hasDiscountCard) {
  var total = 0;
  for (var index in this.items) {
    total += this.items[index].price;  
    // console.log(this.items[index].name);  
    if (this.items[index].isBogof === true) {
      total = total - this.items[index].price/2;
    }
  }
  if (total > 20.00) {
    total *= 0.9;
  }
  if (hasDiscountCard) {
    total *= 0.95;
  }
  return total.toFixed(2);
},
  
};

module.exports = basket;

