import FavoriteRestaurants from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/favorited-Restaurants/favorite-restaurant-search-presenter';

describe('Searching Restaurants', () => {
    let presenter;

    const searchRestaurants = (query) => {
        const queryElement = document.getElementById('query');
        queryElement.value = 'restaurant a';
        queryElement.dispatchEvent(new Event('change'));
    };

    const setRestaurantSearchContainer = () => {
        document.body.innerHTML = `
            <div id="restaurant-search-container">
                <input id="query" type="text">
                <div class="movie-result-container">
                    <ul class="restaurants">
                        <li class="restaurant">
                            <span class="restaurant_title">Film Satu</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;
    };

    const constructPresenter = () => {
        spyOn(FavoriteRestaurants, 'searchRestaurants');
        presenter = new FavoriteRestaurantSearchPresenter({
            favoriteRestaurants: FavoriteRestaurants,
        });
    };

    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
    });

    it('Should be able to capture the query typed by the user', () => {
        searchRestaurants('restaurant a');

        expect(presenter.latestQuery).toEqual('restaurant a');
    });

    it('should ask the model to search for favorited restaurants', () => {
        searchRestaurants('restaurant a');

        expect(FavoriteRestaurants.searchRestaurants)
            .toHaveBeenCalledWith('restaurant a');
    });

    it('should show the found restaurant', () => {
        presenter._showFoundRestaurants([{ id: 1 }]);
        expect(document.querySelectorAll('.restaurant').length).toEqual(1);

        presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
        expect(document.querySelectorAll('.restaurant').length).toEqual(2);
    });

    it('Should show the title of the found restaurant', () => {
        presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }]);
        expect(document.querySelectorAll('.restaurant_title').item(0).textContent)
            .toEqual('Satu');

        presenter._showFoundRestaurants(
            [{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }],
        );

        const restaurantTitles = document.querySelectorAll('.restaurant_title');
        expect(restaurantTitles.item(0).textContent).toEqual('Satu');
        expect(restaurantTitles.item(1).textContent).toEqual('Dua');
    });

    it('Should show - for found restaurant without title', () => {
        presenter._showFoundRestaurants([{ id: 1 }]);

        expect(document.querySelectorAll('.restaurant_title').item(0).textContent)
            .toEqual('-');
    });

    it('should show the restaurant found by favorite restaurans', (done) => {
        document.getElementById('restaurant-search-container')
            .addEventListener('restaurants:searched:updated', () => {
                expect(document.querySelectorAll('.restaurant').length).toEqual(3);
                done();
            });

        FavoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
            { id: 111, title: 'restaurant ABC' },
            { id: 222, title: 'ada juga restaurant ABCDEGFG' },
            { id: 333, title: 'ini juga boleh restaurant A' },
        ]);

        searchRestaurants('restaurant a');
    });

    it('should show the name of the restaurant found by Favorite Restaurant', (done) => {
        document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
            const restaurantTitles = document.querySelectorAll('.restaurant_title');
            expect(restaurantTitles.item(0).textContent).toEqual('restaurant ABC');
            expect(restaurantTitles.item(1).textContent).toEqual('ada juga restaurant ABCDEGFG');
            expect(restaurantTitles.item(2).textContent).toEqual('ini juga boleh restaurant A');

            done();
        });

        FavoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
            { id: 111, title: 'restaurant ABC' },
            { id: 222, title: 'ada juga restaurant ABCDEGFG' },
            { id: 333, title: 'ini juga boleh restaurant A' },
        ]);

        searchRestaurants('restaurant a');
    });
});