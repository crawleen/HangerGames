import axios from "axios";

export default {
    getBooks: function() {
      return axios.get("/api/restaurants");
    },
    updateLike: function(id) {
      return axios.put("/api/restaurants/thumbsup" + id);
    },
    updateDislike: function(id) {
      return axios.put("/api/restaurants/thumbsdown" + id);
    },
    getRestaurants: function(liked) {
      return axios.get("/api/restaurants/:" +liked);
    },
    saveRestaurants: function(restaurantData) {
      return axios.post("/api/restaurants", restaurantData);
    }    
};
