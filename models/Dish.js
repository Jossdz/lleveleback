const { model, Schema } = require("mongoose")

const dishSchema = new Schema(
  {
    name: String,
    price: Number,
    photo: String,
    ingredients: [String],
    foodType: {
      type: String,
      enum: ["DESSERT", "VEGAN", "GLUTENFREE", "MEAT"]
    },
    restaurant: {
      type: Schema.Types.ObjectId,
      ref: "Restaurant"
    }
  },
  {
    timestamps: true
  }
)

module.exports = model("Dish", dishSchema)
