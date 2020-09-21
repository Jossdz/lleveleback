const Dish = require("../models/Dish")
const Restaurant = require("../models/Restaurant")

exports.getDish = async (req, res) => {
  const dish = await Dish.findById(req.params.dishId)
  res.status(200).json({ dish })
}
exports.createDish = async (req, res) => {
  const { restaurantId } = req.params
  const dish = await Dish.create({
    ...req.body,
    restaurant: restaurantId
  })

  await Restaurant.findByIdAndUpdate(restaurantId, { $push: { dishes: dish } })

  res.status(201).json({ dish })
}
exports.updateDish = async (req, res) => {
  const { restaurantId } = req.params
  const dish = await Dish.findByIdAndUpdate(
    restaurantId,
    { ...req.body },
    { new: true }
  )
  res.status(200).json({ dish })
}
exports.deleteDish = async (req, res) => {
  const { restaurantId } = req.params
  await Dish.findByIdAndRemove(restaurantId)

  res.status(200).json({ message: "deleted" })
}
