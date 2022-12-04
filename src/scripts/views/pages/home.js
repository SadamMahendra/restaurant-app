import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="beforeContent">
        <jumbotron-restaurant></jumbotron-restaurant>
        <div id="content" tabindex="0" >
          <h2 class="content__heading">Explore Restaurant</h2>
          <div id="restaurants" class="restaurants"></div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
