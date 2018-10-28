const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

// Start with getting an array of 'objects' aka the beers.

const Beers = function (url) {
  this.beers = [];
  this.url = url;
};

// ......................................

Beers.prototype.bindEvents = function () {
  PubSub.subscribe('BeersListView:beers-list-view-ready', (event) => {
    const beerType = event.detail;
    this.getData(beerType);
  });
};

// ......................................

Beers.prototype.getData = function (beerType) {
  const url = `https://api.punkapi.com/v2/beers${ beerType }`
  const requestHelper = new RequestHelper(url);
  requestHelper.get()
    .then((data) => {
    this.beers = data;
    PubSub.publish('Beers:beers-data-ready', this.beers);
  })
  console.log(this.beers);
};

// ......................................


Beers.prototype.handleDataReady = function (beers) {
  const beerNames = this.getBeerNames(beers);
  this.modelBeers(beers, beerNames);
};

// ......................................

Beers.prototype.getBeerName = function (beers) {
  return beers
  .map(beer => beer.food_pairing)
  .filter( (food_pairing, index, food_pairings) =>
  food_pairings.indexOf(food_pairing) === index)
};
// filter the beers to show ones with the same food pairings.
// ......................................

Beers.prototype.modelBeers = function (beers, beerName) {
  this.beers = beerName.map((beer) => {
    return {
      name: beerName,
      tagline: this.beersByFoodPairing(beers, beerName)
    };
  });
  console.log(this.beers);
};



module.exports = Beers;
