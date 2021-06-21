import CONFIG from '../scripts/global/config';

const createRestaurantDetailTemplate = (restaurant) => `

    <h2 class="restaurant_name">${restaurant.name}</h2>

    // Button Favorite On here 

    <p>${restaurant.categories[0].name} ${restaurant.categories[1].name}</p>
    <h4>Address : </h4><p>${restaurant.address} 
    <h4>City: </h4><p>${restaurant.city}</p>
    <img class="restaurant_poster" src="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    
    <h4>Description</h4>
    <p>${restaurant.description}</p>

    <div class="restaurant_info">
    <h3>Information</h3> 

    <div id="restaurant_menu" class"restaurant_menu">
        <h4>Menu</h4>
        <h5>Food:  ${restaurant.menus.foods[0].name}</h5>
        <h5>drinks : ${restaurant.menus.drinks[0].name}</h5>
    </div>

    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
    </div>
    <div class="restaurant_overview">
    <h3>Overview</h3>
    <p>${restaurant.customerReviews[0].name}</p>
    <p>${restaurant.customerReviews[1].review}</p>
    <p>${restaurant.customerReviews[2].date}</p>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item_header">
        <img class="restaurant-item_header_poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        
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

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };