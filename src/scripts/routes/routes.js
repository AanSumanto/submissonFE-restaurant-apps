import Detail from '../view/pages/detail-restaurant';
import ListRestaurant from '../view/pages/list-restaurant';

const routes = {
    '/': ListRestaurant,
    '/list-restaurant': ListRestaurant,
    '/detail/:id': Detail,

};

export default routes;