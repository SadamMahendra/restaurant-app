const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Restaurant', ({ I }) => {
  I.seeElement('#mainContent');

  I.see('belum ada restaurant yang di favoritekan', '.not-found__like');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('belum ada restaurant yang di favoritekan', '.not-found__like');

  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.restaurants-item__content h3 a');

  const firstRestaurant = locate('.restaurants-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants-item');
  const likedRestaurantTitle = await I.grabTextFrom(
    '.restaurants-item__content h3'
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unlike one restaurant', async ({ I }) => {
  I.see('belum ada restaurant yang di favoritekan', '.not-found__like');

  I.amOnPage('/');
  I.wait(2);
  I.seeElement('.restaurants-item__content h3 a');

  const firstRestaurant = locate('.restaurants-item__content h3 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurants-item');
  const likedRestaurantTitle = await I.grabTextFrom(
    '.restaurants-item__content h3'
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.click(firstRestaurant);

  I.wait(2);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('belum ada restaurant yang di favoritekan', '.not-found__like');
});
