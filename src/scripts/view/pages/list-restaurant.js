import RestaurantDbSource from '../../data/restaurantdb-source';

const ListRestaurant = {
    async render() {
        return `
            <h2>List Restaurant</h2>
        `;
    },

    async afterRender() {
        const restaurant = await RestaurantDbSource.ListRestaurant();
        console.log(restaurant);
    },
};

export default ListRestaurant;