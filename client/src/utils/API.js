import axios from "axios";

export default {
    saveRestaurants: function(restaurantData) {
        return axios.post("/api/restaurants", restaurantData);
    }
};
