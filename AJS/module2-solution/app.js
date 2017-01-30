(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

  var buyList = this;
  buyList.items = ShoppingListCheckOffService.getItemsToBuy();
  buyList.buyItem = function(itemIndex){
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getItemsBought();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var itemsToBuy = [
    {name: 'Cookies',
    quantity: 10},
    {name: 'Milk',
    quantity: 1},
    {name: 'Bread',
    quantity: 2},
    {name: 'Water',
    quantity: 6},
    {name: 'Chips',
    quantity: 3},
  ];


var itemsBought = [];

  service.getItemsToBuy = function () {
   return itemsToBuy;
  };

  service.getItemsBought = function () {
   return itemsBought;
  };

  service.buyItem = function (itemIndex){
    itemsBought.push(itemsToBuy[itemIndex]);
    itemsToBuy.splice(itemIndex, 1);
  };

}
})();
