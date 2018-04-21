var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const restaurantSchema = new Schema({
    // id: {type: Number, required: true},
    userId: { type: Number, required: true },
    name: { type: String, required: true}
});
    // liked: {type: Boolean},
    // disliked: {type:Boolean}
  //}, { timestamps: { createdAt: 'created_at' } });

  const Restaurant = mongoose.model("Restaurant", restaurantSchema);
  module.exports = Restaurant;


