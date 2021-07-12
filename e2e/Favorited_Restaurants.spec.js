const assert = require('assert');

Feature('Favorited Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada film untuk di tampilkan', '.restaurant-item_not_found');
});

Scenario('favorite one restaurant', async ({ I }) => {
    I.see('Tidak ada film untuk di tampilkan', '.restaurant-item_not_found');

    I.amOnPage('/');

    I.seeElement('.restaurant_title a');

    const firstRestaurant = locate('.restaurant_title a').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);

    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');
    const favoritedRestaurantName = await I.grabTextFrom('.restaurant_title');

    assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});

Scenario('searching restaurants', async ({ I }) => {
   I.see('Tidak ada restaurant untuk di tampilkan', '.restaurant-item_not_found');

   I.amOnPage('/');

   I.seeElement('.restaurant_title a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.restaurant_title a').at(i));
    I.seeElement('#favoriteButton');
    I.click('#favoriteButton');
    titles.push(await I.grabTextFrom('.restaurant_title'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleFavoritedRestaurant = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleFavoritedRestaurant);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('.restaurant_title').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
