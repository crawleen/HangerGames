var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    // id: {type: Number, required: true},
    userId: { type: Number, required: true },
    id: {type: String, required: true, unique: true},
    name: { type: String, required: true},
    location: { type: String},
    liked: {type: Boolean},
    disliked: {type: Boolean},
    comments: {type: String},
    date: { type: Date }
});

  const Restaurant = mongoose.model("Restaurant", restaurantSchema);
  module.exports = Restaurant;


