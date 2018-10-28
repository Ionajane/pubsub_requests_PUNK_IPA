const BeersListView = require('./views/beers_list_view.js');
const BeersView = require('./views/beer_view.js');
const Beers = require('./models/beers.js');

// add listener for content
document.addEventListener('DOMContentLoaded', () => {
  console.log("Helloooooo");

  const beers = new Beers();
  beers.getData();
  console.log(beers);

  const beersListContainer = document.querySelector('#beers');
  const beersListView = new BeersListView(beersListContainer);
  beersListView.bindEvents();


});






//HTML ?     <script src="js/bundle.js"></script>
