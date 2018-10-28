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

  const name =  this.createBeerHeading();
  // beerContainer.appendChild(beerlist);

  this.beerContainer.appendChild(beerContainer)

};

// ......................................

  BeerView.prototype.createBeerHeading = function () {
    const name = document.createElement('h3');
    name.classList.add('beer-name');
  };




// ......................................

//
// BeerView.prototype.createBeersList = function () {
//   const beersList = document.createElement('ul');
//   beersList.classList.add('beers');
//   this.populateList(beersList);
//   return beersList;
// };
//
// // ......................................
//
// BeerView.prototype.populateList = function (list) {
//   this.beer.name.forEach( (beer) => {
//   const beerListItem = document.createElement('li');
//   beerListItem.textContent = beer.name;
//   list.appendChild(beerListItem);
// });
// };

module.exports = BeerView;
