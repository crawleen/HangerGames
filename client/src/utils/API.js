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
    updateComment: function(id, comment) {
      return axios.put("/api/restaurants/comment", id, comment);
    },
    getRestaurants: function(liked) {
      return axios.get("/api/restaurants/:" +liked);
    },
    saveRestaurants: function(restaurantData) {
      return axios.post("/api/restaurants", restaurantData);
    },
    login: function(email, password) {
      return axios.post('/api/auth/login', { email, password });
    },
    register: function(firstName, lastName, email, password) {
      return axios.post('/api/auth/register', { firstName, lastName, email, password })
    }
};  
