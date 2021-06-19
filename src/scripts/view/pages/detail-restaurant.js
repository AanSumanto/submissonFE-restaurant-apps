import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
    async render() {
     return `
        <div id="restaurant" class="restaurant"></div>
     `;
    },

    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantDbSource.detailRestaurant(url.id);
      console.log(restaurant);
    },
};

export default Detail;