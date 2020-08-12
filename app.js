"use strict";

var hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm"
];

var myObject1 = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  salesArr: [],
  getRandomInteger: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  sales: function() {
    for (var i = 0; i < hours.length; i++) {
      this.salesArr.push(
        Math.ceil(
          this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookieSale
        )
      );
    }
  },
  render: function() {
    this.sales();
    var seattle = document.getElementById("seattle");
    var total = 0;

    for (var i = 0; i < this.salesArr.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = `${hours[i]}: ${this.salesArr[i]} cookies`;
      total = total + this.sales[i];
      seattle.append(liEl);
    }
  }
};

myObject1.render();

var myObject2 = {
  location: "tokyo",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  salesArr: [],
  getRandomInteger: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  sales: function() {
    for (var i = 0; i < hours.length; i++) {
      this.salesArr.push(
        Math.ceil(
          this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookieSale
        )
      );
    }
  },
  render: function() {
    this.sales();
    var tokyo = document.getElementById("tokyo");
    var total = 0;

    for (var i = 0; i < this.salesArr.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = `${hours[i]}: ${this.salesArr[i]} cookies`;
      total = total + this.sales[i];
      tokyo.append(liEl);
    }
  }
};

myObject2.render();

var myObject3 = {
  location: "dubai",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  salesArr: [],
  getRandomInteger: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  sales: function() {
    for (var i = 0; i < hours.length; i++) {
      this.salesArr.push(
        Math.ceil(
          this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookieSale
        )
      );
    }
  },
  render: function() {
    this.sales();
    var dubai = document.getElementById("dubai");
    var total = 0;

    for (var i = 0; i < this.salesArr.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = `${hours[i]}: ${this.salesArr[i]} cookies`;
      total = total + this.sales[i];
      dubai.append(liEl);
    }
  }
};

myObject3.render();

var myObject4 = {
  location: "paris",
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  salesArr: [],
  getRandomInteger: function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  sales: function() {
    for (var i = 0; i < hours.length; i++) {
      this.salesArr.push(
        Math.ceil(
          this.getRandomInteger(this.minCust, this.maxCust) * this.avgCookieSale
        )
      );
    }
  },
  render: function() {
    this.sales();
    var paris = document.getElementById("paris");
    var total = 0;

    for (var i = 0; i < this.salesArr.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = `${hours[i]}: ${this.salesArr[i]} cookies`;
      total = total + this.sales[i];
      paris.append(liEl);
    }
  }
};

myObject4.render();

// var myObject5 = {
//   location: "lima",
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   salesArr: []
// };
