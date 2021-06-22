import { createRestaurantItemTemplate } from '../../../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
    async render() {
        return `
            <div class="content">
                <h2 class="content_heading">Your favorite Restaurant </h2>
                <div id="restaurants" class="restaurants">
                </div>
            </div>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restaurantContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;