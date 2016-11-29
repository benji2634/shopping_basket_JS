var basket = {
  items: [
{ name: "Pepperoni",
  price: 3.00,
  isBogof: true
},
{ name: "Milk Tray",
price: 2.00,
isBogof: false
},
{ name: "Nature Valley",
price: 2.00,
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
  }
  if (total > 20.00) {
    total = total * 0.9;
  }
  if (hasDiscountCard) {
    total = total * 0.95;
  }
  return total;
},
bogof: function() {
  for (var item in this.items) {
    if (item.isBogof === true) {
      console.log(item);
      this.items.price = 0.00;
      this.items.push(item);
    }
  }
}
  
};

module.exports = basket;

