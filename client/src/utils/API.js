import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/book");
  },
  // Gets the book with the given id
  login: function(email, password) {
    return axios.post('/api/auth/login', { email, password });
  },
  register: function(firstName, lastName, email, password) {
    return axios.post('/api/auth/register', { firstName, lastName, email, password })
  }
};
