const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Beers = function () {
  this.beers = [];
};

// ......................................

Beers.prototype.getData = function () {
  const url = `https://api.punkapi.com/v2/beers`;
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
    .then((data) => {
    this.beers = data;
    PubSub.publish('Beers:beers-data-ready', this.beers);
  });
};

// ......................................


Beers.prototype.handleDataReady = function (beers) {
  const beerNames = this.getBeerNames(beers);
  this.modelBeers(beers, beerNames);
};

// ......................................

Beers.prototype.getBeerNames = function (beers) {
  return beers
  .map(beer => beer.description)
  .filter( (description, index, descriptions) =>
  descriptions.indexOf(description) === index)
};

// ......................................



module.exports = Beers;
