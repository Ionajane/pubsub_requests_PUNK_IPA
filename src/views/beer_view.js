const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const BeerView = function (container, beer) {
  this.beerContainer = container;
  this.beer = beer;
};

// ......................................

BeerView.prototype.render = function () {
const beerContainer = document.createElement('div');
beerContainer.classList.add('beer');
};

// ......................................


module.exports = BeerView;
