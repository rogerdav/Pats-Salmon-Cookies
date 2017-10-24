'use strict';
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// stores object
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
var storesToUse = [firstAndPike,seaTacAirPort,seattleCenter,capitolHill,alki];

var dave = document.getElementById('content');

// creates heading row
function createHeading() {
  var salesHours = ['Store Name ','6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ','8pm ','Location Total'];
  var headingRow = '';
  for ( var i = 0; i < salesHours.length; i++) {
    headingRow = headingRow + '<td>' + salesHours[i] + '</td>';
  }
  var headRowScreen;
  headRowScreen = document.createElement('tr');
  headRowScreen.innerHTML = headingRow;
  dave.appendChild(headRowScreen);
}
console.log(createHeading());

//creates a function to populate and add to the object an array with salesby hour.
function populateRows(storeName) {
  storeName.salesByHour = storeName.aveHourlySales();
}
// appendRowsToTable takes the storemane and appends a table row for each store
function appendRowsToTable(storeName) {
  var arraySum = 0;
  var rowinfo = storeName.storeName;
  for ( var i = 0; i < storeName.salesByHour.length; i++) {
    arraySum = arraySum + storeName.salesByHour[i];
    rowinfo = rowinfo + '<td>' + storeName.salesByHour[i] + '</td>';
  }
  rowinfo = rowinfo + '<td>' + arraySum + '</td>';
  console.log('arraysum',arraySum);
  console.log('rowinfo',rowinfo);
  var newRow;
  newRow = document.createElement('tr');
  newRow.innerHTML = rowinfo;
  dave.appendChild(newRow);
}

// runs through the list of stors and populates the table with that infomation
for ( var j = 0; j < storesToUse.length; j++) {
  populateRows(storesToUse[j]);
  appendRowsToTable(storesToUse[j]);
}
// creates an array of hours totals for ALL stores in the list of stores to use
var hourlyTotals = [];
for ( var k = 0; k < 15; k++) {
  var tempTotal = 0;
  for ( var m = 0; m < storesToUse.length; m++) {
    tempTotal = tempTotal + storesToUse[m].salesByHour[k];
  }
  hourlyTotals.push(tempTotal);
}
console.log(hourlyTotals);

function appendTotalForTable() {
  var totalRow = 'Totals: ';
  for ( var p = 0; p < hourlyTotals.length; p++) {
    totalRow = totalRow + '<td>' + hourlyTotals[p] + '</td>';
  }
  var newTotalRow;
  newTotalRow = document.createElement('tr');
  newTotalRow.innerHTML = totalRow;
  dave.appendChild(newTotalRow);
}
appendTotalForTable();
