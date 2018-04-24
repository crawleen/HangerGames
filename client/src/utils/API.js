import axios from "axios";

export default {
    saveRestaurants: function(restaurantData) {
        console.log(restaurantData);
        return axios.post("/api/restaurants", restaurantData);
    },
    saveUser: function(userData){
      console.log(userData);
      return axios.post("/api/auth", userData);
    }
};
