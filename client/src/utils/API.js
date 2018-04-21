import axios from "axios";

export default {
    saveRestaurants: function(restaurantData) {
        console.log(restaurantData);
        return axios.post("/api/restaurants", restaurantData);
    }
    
};
