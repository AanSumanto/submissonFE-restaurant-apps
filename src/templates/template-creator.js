import CONFIG from '../scripts/global/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant_name">${restaurant.name}</h2>
    <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}" alt="${restaurant.title}" />
    <div class="restaurant_info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurant.tagline}</p>
    <h4>Release Date</h4>
    <p>${restaurant.release_date}</p>
    <h4>Duration</h4>
    <p>${restaurant.runtime} minutes</p>
    <h4>Rating</h4>
    <p>${restaurant.vote_average}</p>
    </div>
    <div class="restaurant_overview">
    <h3>Overview</h3>
    <p>${restaurant.overview}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
        <img class="restaurant-item_header_poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item_header_rating">
            <p>⭐️<span class="restaurant-item_header_rating_score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item_content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };