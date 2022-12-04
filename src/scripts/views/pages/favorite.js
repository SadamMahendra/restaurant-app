import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {
  createRestaurantItemTemplate,
  createNotFoundLikeTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
     <div id="content" tabindex="0" >
        <h2 class="content__heading">Favorite Restaurant</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });

    if (restaurants.length <= 0) {
      const content = document.querySelector('#content');
      content.innerHTML = createNotFoundLikeTemplate();
    }
  },
};

export default Favorite;
