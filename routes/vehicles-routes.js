const express = require("express")

const router = express.Router()
const vehiclesControllers = require("../controllers/vehicles-controllers")

router.get("/vehicles", vehiclesControllers.listVehicles)
router.get("/vehicles/:userId", vehiclesControllers.showVehicle)
router.put("/vehicles/:userId", vehiclesControllers.updateVehicle)
router.delete("/vehicles/:userId", vehiclesControllers.deleteVehicle)
router.post("/vehicles", vehiclesControllers.createVehicle)

module.exports = router
