const express = require("express");
const router = express.Router();

const eventControllers = require("../controllers/eventController");

router.get("/", eventControllers.getEvents);
router.post("/", eventControllers.createEvent);
router.get("/:id", eventControllers.getEvent);
router.patch("/:id", eventControllers.updateEvent);
router.delete("/:id", eventControllers.deleteEvent);

module.exports = router;
