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
// method to create random customer per hour
Store.prototype.hourlyCust = function() {
  return getRandomIntInclusive(this.minCust,this.maxCust);
};
// creates metho to create array of hourly sales
Store.prototype.aveHourlySales = function () {
  var salesByHour = [];
  for (var i = 0; i < 15; i++) {
    salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
  }
  return salesByHour;
};
//creates a function to populate and add to the object an array with sales by hour.
function populateRows(storeName) {
  storeName.salesByHour = storeName.aveHourlySales();
}



var dave = document.getElementById('content');
var tableheadrow = document.getElementById('headerrow');
var storeForm = document.getElementById('store_data_input');
var storesToUse = [];
createHeading();
console.log(dave);
console.log(tableheadrow);
console.log(storeForm);
console.log(storesToUse);

//generate stores - info taken from form and stored in array called storesToUse.
function detailsFromForm(event) {
  event.preventDefault();
  var location = event.target.store_name.value;
  var minCust = event.target.min_cust.value;
  var maxCust = event.target.max_cust.value;
  var aveSales = event.target.ave_sales.value;
  var storenew = new Store(location,minCust,maxCust,aveSales);
  populateRows(storenew);//add an array of hourly sales numbers to store object
  storesToUse.push(storenew);


  appendRowsToTable(storenew);

  storeForm.reset();
}


storeForm.addEventListener('submit', detailsFromForm);



// creates heading row
function createHeading() {
  var salesHours = ['6am ','7am ','8am ','9am ','10am ','11am ','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm ','8pm ','Location Total'];
  var headingRow = '<td>' + 'Store Name' + '</td>';
  for ( var i = 0; i < salesHours.length; i++) {
    headingRow = headingRow + '<td>' + salesHours[i] + '</td>';
  }
  var headRowScreen;
  headRowScreen = document.createElement('tr');
  headRowScreen.innerHTML = headingRow;
  tableheadrow.appendChild(headRowScreen);
}


// appendRowsToTable takes the storemane and appends a table row for each store
function appendRowsToTable(storeName) {

  var arraySum = 0;
  var rowinfo = '<td>' + storeName.storeName + '</td>';
  for ( var i = 0; i < storeName.salesByHour.length; i++) {
    arraySum = arraySum + storeName.salesByHour[i];
    rowinfo = rowinfo + '<td>' + storeName.salesByHour[i] + '</td>';
  }
  rowinfo = rowinfo + '<td>' + arraySum + '</td>';
  // console.log('arraysum',arraySum);
  // console.log('rowinfo',rowinfo);
  var newRow = '';
  newRow = document.createElement('tr');
  newRow.innerHTML = rowinfo;
  dave.appendChild(newRow);
}

// runs through the list of stors and populates the table with that infomation
// for ( var j = 0; j < storesToUse.length; j++) {
//   populateRows(storesToUse[j]);
//   appendRowsToTable(storesToUse[j]);
// }
// creates an array of hours totals for ALL stores in the list of stores to use
var hourlyTotals = [];
for ( var k = 0; k < 15; k++) {
  var tempTotal = 0;
  for ( var m = 0; m < storesToUse.length; m++) {
    tempTotal = tempTotal + storesToUse[m].salesByHour[k];
  }
  hourlyTotals.push(tempTotal);
}
//console.log(hourlyTotals);

function appendTotalForTable() {
  var totalRow = '<td class="store">' + 'Totals: ' + '</td>';
  for ( var p = 0; p < hourlyTotals.length; p++) {
    totalRow = totalRow + '<td>' + hourlyTotals[p] + '</td>';
  }
  var newTotalRow;
  newTotalRow = document.createElement('tr');
  newTotalRow.innerHTML = totalRow;
  dave.appendChild(newTotalRow);
}
