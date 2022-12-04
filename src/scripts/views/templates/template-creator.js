import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
 <img class="restaurant-detail__image" src="${
   CONFIG.BASE_IMAGE_URL + restaurant.pictureId
 }" alt="${restaurant.name}" />

 <div class="restaurant-detail__content">
  <h2 class="restaurant-info__title">${restaurant.name}</h2>
  <div class="restaurant-info__city">
    <h3>Alamat : ${restaurant.address} - ${restaurant.city}</h2>
  <div class="restaurant-description__info">
    <p>${restaurant.description}</p>
  </div>
  </div>

  <div class="restaurant-detail__list">
    <h3>Makanan</h3>
    ${restaurant.menus.foods
      .map(
        (food) => `<span class="restaurant-detail__item">${food.name}</span>`
      )
      .join(' ')}
    </div>

    <div class="restaurant-detail__list">
    <h3>Minuman</h3>
    ${restaurant.menus.drinks
      .map(
        (drink) => `<span class="restaurant-detail__item">${drink.name}</span>`
      )
      .join(' ')}
    </div>
 
  <div class="restaurant-review">
    <h3>reviews :</h3>
    ${restaurant.customerReviews
      .map(
        (customer) => `
       <div class="restaurant-review__detail">
         <h4>${customer.name} ${customer.date}</h4>
         <p>${customer.review}</p>
       </div>`
      )
      .join('')}
  </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurants-item">
      <div class="restaurants-item__header">
        <img
          class="lazyload"
          alt="${restaurant.name}"
          data-src="${
            restaurant.pictureId
              ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
              : 'https://picsum.photos/id/666/800/450?grayscale'
          }"
        />
        <div class="restaurants-item__header-city">
          <p class="restaurants-item__header-city-contentt">${
            restaurant.city
          }</p>
        </div>
      </div>
      <div class="restaurants-item__content">
        <p class="restaurants-item__rating">
          rating : <span>${restaurant.rating}</span>
        </p>
        <h3><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
      </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createNotFoundLikeTemplate = () => `
  <div class="not-found__like">
    <h2>belum ada restaurant yang di favoritekan</h2>
    <p>cobalah menambahkan favorite</p>
  </div>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createNotFoundLikeTemplate,
};
