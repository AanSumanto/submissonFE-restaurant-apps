import CONFIG from '../scripts/global/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant_info">
        <h2 class="restaurant_name">${restaurant.name}</h2>
        <favorite-button> </favorite-button>
        <h4>Restaurant Categories : </h4> <p>${restaurant.categories.map((categories) => categories.name)}</p>
        <h4>Address : </h4><p>${restaurant.address} 
        <h4>City: ${restaurant.city} </h4>
        <h4>Rating: ${restaurant.rating} </h4>
        <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
        <h4>Description</h4>
        <p>${restaurant.description}</p>
        <br>
        <h3>Menu Information</h3> 
        <div id="restaurant_menu" class"restaurant_menu">
            <table>
                <tr><td>Food</td>
                    <td>${restaurant.menus.foods.map((food) => food.name)}</td> 
                </tr>
                <tr><td>Drink</td>
                    <td>${restaurant.menus.drinks.map((food) => food.name)}</td>
                </tr>
            </table>
        </div>
        <br>
            <h3>Review</h3>
                ${restaurant.customerReviews.map((review) => `
                    <div class="restaurant_review">
                        <h5 tabindex="0">${review.name}</h5>
                        <p tabindex="0" class"date-review">${review.date}</p>
                        <p tabindex="0">${review.review}</p>
                        <br>
                    </div>
                `).join('')}
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
        <img class="restaurant-item_header_poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
    </div>
    <div class="restaurant-item_content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
            <div class="restaurant-item_header_rating">
                <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
            </div>
        </h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createRestaurantItemFavoriteTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
        <img class="restaurant-item_header_poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
    </div>
    <div class="restaurant-item_content">
        <h3>City: ${restaurant.city} </h3>
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a>
            <div class="restaurant-item_header_rating">
                <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
            </div>
        </h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

const createFavoriteButtonTemplate = () => `
    <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
    `;

const createFavoritedButtonTemplate = () => `
    <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
    `;

export {
        createRestaurantDetailTemplate,
        createRestaurantItemTemplate,
        createRestaurantItemFavoriteTemplate,
        createFavoriteButtonTemplate,
        createFavoritedButtonTemplate,
    };