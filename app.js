'use strict';
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// this is the first store object
var storeNum1  = {
  storename: '1st & Pike',
  minCust: 23,
  maxCust: 65,
  aveSales: 6.3,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 15; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }

};
// this is the second store
var storeNum2  = {
  storename: 'Seatac Airport',
  minCust: 3,
  maxCust: 23,
  aveSales: 1.2,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 15; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};
// this is the 3rd store
var storeNum3 = {
  storename: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  aveSales: 3.7,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 15; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};
// this is the 4th store
var storeNum4  = {
  storename: 'Capitol Hill',
  minCust: 20,
  maxCust: 35,
  aveSales: 2.3,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 15; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};
//this is the 5th store
var storeNum5  = {
  storename: 'Alki',
  minCust: 2,
  maxCust: 16,
  aveSales: 4.6,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 15; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};

//array with sales hours
var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

function putListinDoc(storeLocation) {
//listhead creates a heading with store name for each store
  var listhead = document.createElement('div');
  listhead.innerHTML = '<p>' + storeLocation.storename + '</p>';
  //document.body.appendChild(listhead);

  var hoursList = [];
  var x = storeLocation.aveHourlySales(); // creates array with hoursly sales
  console.log(x);
  //creates array of 'hours ' + values
  for (var j = 0; j < openHours.length; j++) {
    hoursList.push(openHours[j] + '  ' + x[j]);
  }
  console.log(hoursList);
  // creates li elements for each open hour with sales data
  var ulelement = document.createElement('ul');

  var lines = '';

  for ( var k = 0; k < hoursList.length; k++) {
    lines = lines + '<li>' + hoursList[k] + '</li>';
  }
  //for ( var m = 0; m < liArray.length; m++) {
  //  ulelement.appendChild(liArray[m]);
  //}
  ulelement.innerHTML = lines;
  listhead.appendChild(ulelement);
  document.body.appendChild(listhead);
}

putListinDoc(storeNum1);
putListinDoc(storeNum2);
putListinDoc(storeNum3);
putListinDoc(storeNum4);
putListinDoc(storeNum5);
