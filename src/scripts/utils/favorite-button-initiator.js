// import { createFavoriteButtonTemplate } from "../../templates/template-creator";

const FavoriteButtonInitiator = {
    async init({ favoriteButtonContainer, restaurant }) {
        this._favoriteButtonContainer = favoriteButtonContainer;
        this._restaurant = restaurant;
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderFavorited();
        } else {
            this._renderFavorite();
        }
    },

    // async _isRestaurantExist(id) {
    //     // idb
    // },

    // _renderFavorite() {
    //     this._favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

    //     const favoriteButton = document.querySelector('#favoriteButton');
    //     favoriteButton.addEventListener('click', async () => {
    //         // idb
    //     });
    //     this._renderButton();
    // },
};

export default FavoriteButtonInitiator;