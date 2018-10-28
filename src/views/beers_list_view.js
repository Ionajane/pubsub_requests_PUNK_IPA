const PubSub = require('../helpers/pub_sub.js');
const BeerView = require('./beer_view.js');

const BeersListView = function (container) {
  this.container = container;
}

BeersListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-data-ready', (event) => {
    this.beers = event.detail
    this.render();
  });
};

// ......................................

BeersListView.prototype.render = function () {
  this.beers.forEach( (beer) => {
    const beerView = new BeerView(this.container, beer)
    beerView.render();
  });
};

// ......................................



module.exports = BeersListView;
