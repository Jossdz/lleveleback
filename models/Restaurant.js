const { model, Schema } = require("mongoose")

const restaurantSchema = new Schema(
  {
    name: String,
    description: String,
    direction: String,
    image: String,
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    dishes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Dish"
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = model("Restaurant", restaurantSchema)
