const router = require("express").Router()
const { catchErrors } = require("../middlewares")
const {
  getRestaurant,
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant
} = require("../controllers/restaurant")
const {
  createDish,
  deleteDish,
  getDish,
  updateDish
} = require("../controllers/dish")

router.get("/", (req, res, next) => {
  res.status(200).json({ msg: "Working" })
})

//===========RESTAURANT================

router.get("/restaurants/", catchErrors(getRestaurants))
router.get("/restaurants/:restaurantId", catchErrors(getRestaurant))
router.post("/restaurants/", catchErrors(createRestaurant))
router.put("/restaurants/:restaurantId", catchErrors(updateRestaurant))
router.delete("/restaurants/:restaurantId", catchErrors(deleteRestaurant))

//===============DISH===================
router.get("/dish/:dishId", catchErrors(getDish))
router.post("/dish/:restaurantId", catchErrors(createDish))
router.put("/dish/:dishId", catchErrors(updateDish))
router.delete("/dish/:dishId", catchErrors(deleteDish))

module.exports = router
