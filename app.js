'use strict';
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Store(name,minCust,maxCust,aveSales) {
  this.storeName = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.aveSales = aveSales;
}

Store.prototype.hourlyCust = function() {
  return getRandomIntInclusive(this.minCust,this.maxCust);
};
Store.prototype.aveHourlySales = function () {
  var salesByHour = [];
  for (var i = 0; i < 15; i++) {
    salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
  }
  return salesByHour;
};

var firstAndPike = new Store('First and Pike', 23, 65, 6.3);
var seaTacAirPort = new Store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
var alki = new Store('Alki', 2, 16, 4.6);
