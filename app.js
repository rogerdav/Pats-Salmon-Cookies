'use strict';
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




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
    for (var i = 0; i < 14; i++)  {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }

};
var storenum2  = {
  storename: 'Seatac Airport',
  minCust: 3,
  maxCust: 23,
  aveSales: 1.2,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 14; i++  {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};

var storenum3  = {
  storename: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  aveSales: 3.7,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 14; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};

var storenum4  = {
  storename: 'Capitol Hill',
  minCust: 20,
  maxCust: 35,
  aveSales: 2.3,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 14; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};

var storenum5  = {
  storename: 'Alki',
  minCust: 2,
  maxCust: 16,
  aveSales: 4.6,
  hourlyCust: function () {
    return getRandomIntInclusive(this.minCust,this.maxCust);
  },
  aveHourlySales: function () {
    var salesByHour = [];
    for (var i = 0; i < 14; i++) {
      salesByHour.push(Math.ceil(this.hourlyCust() * this.aveSales));
    }
    return salesByHour;
  }
};
