import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/favorited-Restaurants/favorite-restaurant-search-presenter';

describe('Searching Restaurants', () => {
    let presenter;
    let favoriteRestaurants;

    const searchRestaurants = (query) => {
        const queryElement = document.getElementById('query');
        queryElement.value = query;
        queryElement.dispatchEvent(new Event('change'));
    };

    const setRestaurantSearchContainer = () => {
        document.body.innerHTML = `
            <div id="restaurant-search-container">
                <input id="query" type="text">
                <div class="restaurant-result-container">
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
        favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        presenter = new FavoriteRestaurantSearchPresenter({
            favoriteRestaurants,
        });
    };

    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
    });

    describe('When Query is not empty', () => {
        it('Should be able to capture the query typed by the user', () => {
            searchRestaurants('restaurant a');

            expect(presenter.latestQuery).toEqual('restaurant a');
        });

        it('should ask the model to search for restaurants', () => {
            searchRestaurants('restaurant a');

            expect(favoriteRestaurants.searchRestaurants)
                .toHaveBeenCalledWith('restaurant a');
        });

        it('should show the found restaurant', () => {
            presenter._showFoundRestaurants([{ id: 1 }]);
            expect(document.querySelectorAll('.restaurant').length).toEqual(1);

            presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
            expect(document.querySelectorAll('.restaurant').length).toEqual(2);
        });

        it('Should show the title of the found restaurants', () => {
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

        it('should show the restaurant found by favorite restaurants', (done) => {
            document.getElementById('restaurant-search-container')
                .addEventListener('restaurants:searched:updated', () => {
                    expect(document.querySelectorAll('.restaurant').length).toEqual(3);
                    done();
                });

            favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
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

            favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
                { id: 111, title: 'restaurant ABC' },
                { id: 222, title: 'ada juga restaurant ABCDEGFG' },
                { id: 333, title: 'ini juga boleh restaurant A' },
            ]);

            searchRestaurants('restaurant a');
        });
    });

    describe('When Query is empty', () => {
        it('should capture the query as empty', () => {
            searchRestaurants(' ');
            expect(presenter.latestQuery.length)
            .toEqual(0);

            searchRestaurants('   ');
            expect(presenter.latestQuery.length)
            .toEqual(0);

            searchRestaurants('');
            expect(presenter.latestQuery.length)
            .toEqual(0);

            searchRestaurants('\t');
            expect(presenter.latestQuery.length)
            .toEqual(0);
        });

        it('should show all favorite restaurants', () => {
            searchRestaurants('    ');

            expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalled();
        });
    });

    describe('When no favorite restaurant could be found', () => {
        it('Should show the empty message', (done) => {
            document.getElementById('restaurant-search-container')
            .addEventListener('restaurants:searched:updated', () => {
                expect(document.querySelectorAll('.restaurant_not_found').length)
                    .toEqual(1);
                done();
            });

            favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

            searchRestaurants('restaurant a');
        });

        it('Should not show any restaurant', (done) => {
            document.getElementById('restaurant-search-container').addEventListener('restaurants:searched:updated', () => {
                expect(document.querySelectorAll('.restaurant').length).toEqual(0);
                done();
            });

            favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

            searchRestaurants('restaurant a');
        });
    });
});