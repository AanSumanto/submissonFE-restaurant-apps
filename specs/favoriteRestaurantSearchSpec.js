import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/favorited-Restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantSearchView from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-view';

describe('Searching Restaurants', () => {
    let presenter;
    let favoriteRestaurants;
    let view;

    const searchRestaurants = (query) => {
        const queryElement = document.getElementById('query');
        queryElement.value = query;
        queryElement.dispatchEvent(new Event('change'));
    };

    const setRestaurantSearchContainer = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
        favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
        presenter = new FavoriteRestaurantSearchPresenter({
            favoriteRestaurants,
            view,
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
            expect(document.querySelectorAll('.restaurant-item').length).toEqual(1);

            presenter._showFoundRestaurants([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
            expect(document.querySelectorAll('.restaurant-item').length).toEqual(2);
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

        it('should show - when the movie returned does not contain a title', (done) => {
           document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
            const restaurantTitles = document.querySelectorAll('.restaurant_title');
            expect(restaurantTitles.item(0).textContent).toEqual('-');

            done();
        });

            favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([
                { id: 444 },
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
            // document.getElementById('restaurant-search-container')
            // .addEventListener('restaurants:searched:updated', () => {
            //     expect(document.querySelectorAll('.restaurant_not_found').length)
            //         .toEqual(1);
            //     done();
            // });

            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.restaurant_not_found').length)
                    .toEqual(1);

                    done();
            });

            favoriteRestaurants.searchRestaurants.withArgs('restaurant a').and.returnValues([]);

            searchRestaurants('restaurant a');
        });

        it('Should not show any restaurant', (done) => {
            document.getElementById('restaurants')
                .addEventListener('restaurants:updated', () => {
                    expect(document.querySelectorAll('.restaurant-item').length)
                        .toEqual(0);
                done();
            });

            favoriteRestaurants.searchRestaurants.withArgs('restaurant a')
                .and
                .returnValues([]);

            searchRestaurants('restaurant a');
        });
    });
});