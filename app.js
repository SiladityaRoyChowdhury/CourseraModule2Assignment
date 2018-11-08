(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var showLists = this;

 showLists.items = ShoppingListCheckOffService.getItems();

  showLists.removeItems = function (itemIndex, name , quantity) {
    ShoppingListCheckOffService.removeItem(itemIndex, name , quantity);
  };
}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtItems = this;

    boughtItems.itemsBought = ShoppingListCheckOffService.getItemsBought();
  }


   function ShoppingListCheckOffService() {
      var service = this;

      //List of items in ToBuy array
      var toBuy = [
        {
          name : "Cookies",
          quantity : 10
        },
        {
          name : "Chips",
          quantity : 4
        },
        {
          name : "Chocolates",
          quantity : 6
        },
        {
          name : "Eggs",
          quantity : 12
        },
        {
          name : "Apple",
          quantity : 7
        }
      ];

      //List of items in Bought array
      var bought = [];

      service.removeItem = function(itemIndex, itemName , quantity){
      var itemRemoved = toBuy.splice(itemIndex,1);

      service.addItem(itemName , quantity);
    };

    service.addItem = function(itemName, quantity){
        var item = {
          name: itemName,
          quantity: quantity
        };
        bought.push(item);
      };

    service.getItems = function () {
      return toBuy;
    };

    service.getItemsBought = function () {
      return bought;
    };
   }

})();
