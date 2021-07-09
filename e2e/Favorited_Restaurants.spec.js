Feature('Favorited Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorited');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada film untuk di tampilkan', '.restaurant-item_not_found');
});
