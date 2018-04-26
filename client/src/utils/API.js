import axios from "axios";

export default {
    getBooks: function() {
        console.log("HERE");
        return axios.get("/api/restaurants");
      },
      getBook: function(id) {
        return axios.get("/api/restaurants/" + id);
      },
      getRestaurants: function(liked) {
        console.log(liked);
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


    }
    
};
