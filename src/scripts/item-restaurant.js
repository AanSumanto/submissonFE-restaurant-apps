import data from '../DATA.json';

function itemRestaurant() {
    const list_restaurant =  () => {
        const listRestaurantElement = document.querySelector("#listRestaurant");
        listRestaurantElement.innerHTML = "";
        data.restaurants.forEach(restaurant => {
            listRestaurantElement.innerHTML += `
                <article class="gallery-item">                 
                    <img class="gallery-item_thumbnail hover-opacity"
                        src="${restaurant.pictureId}" 
                        id="img-display" 
                        alt=${restaurant.name}>
                        
                    <div class="gallery-item_description">     
                        <div class="display-topleft">          
                            <p>Kota : ${restaurant.city}</p>       
                        </div>                         
                        <p>Rating : <span class="rating"> ${restaurant.rating} </span> </p>
                        <p><strong>${restaurant.name}</strong></p>                                           
                    </div>

                    <div id="modal01" class="modal" onclick="this.style.display='none'">
                        <span class="button hover-red xlarge display-topright">&times;</span>
                        <div class="modal-content animate-zoom">
                            <img id="display-modal" style="width:100%">
                            <p class="gallery-item_description">${restaurant.description}</p> 
                        </div>
                    </div>           
                </article>  
            `;
            const display = document.querySelectorAll("#img-display");
            display.forEach(button => {
                button.addEventListener("click", function () {
                    document.getElementById("display-modal").src = button.src;
                    document.getElementById("modal01").style.display = "block";
                })
            })
        });
    };
    list_restaurant();
}
export default itemRestaurant;
