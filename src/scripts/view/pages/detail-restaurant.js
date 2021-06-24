import { createRestaurantDetailTemplate } from '../../../templates/template-creator';
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
    async render() {
     return `
        <div id="restaurant" class="restaurant"></div>
        <div id="favoriteButtonContainer" class="favorite"></div>
     `;
    },

    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          picturedId: restaurant.picturedId,
          city: restaurant.city,
          description: restaurant.description,
          rating: restaurant.rating,
        },
  });
    },
};

export default Detail;