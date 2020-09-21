const Restaurant = require("../models/Restaurant")

exports.getRestaurants = async (req, res) => {
  const restaurants = await Restaurant.find()
  res.status(200).json({ restaurants })
}

exports.getRestaurant = async (req, res) => {
  const restaurant = await Restaurant.findById(
    req.params.restaurantId
  ).populate("dishes")
  res.status(200).json({ restaurant })
}

exports.createRestaurant = async (req, res) => {
  const { name, description, direction, image } = req.body
  const restaurant = await Restaurant.create({
    name,
    description,
    direction,
    image,
    owner: req.user.id
  })
  res.status(201).json({ restaurant })
}
exports.updateRestaurant = async (req, res) => {
  const { name, description, direction, image } = req.body
  const { restaurantId } = req.params
  const restaurant = await Restaurant.findByIdAndUpdate(
    restaurantId,
    {
      name,
      description,
      direction,
      image
    },
    { new: true }
  )
  res.status(200).json({ restaurant })
}
exports.deleteRestaurant = async (req, res) => {
  const { restaurantId } = req.params
  await Restaurant.findOneAndRemove(restaurantId)
  res.status(200).json({ message: "deleted" })
}
