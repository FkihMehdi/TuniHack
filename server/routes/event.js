const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/auth");

const eventControllers = require("../controllers/eventController");

router.get("/", eventControllers.getEvents);
router.post("/", verifyToken, eventControllers.createEvent);
router.get("/:id", eventControllers.getEvent);
router.patch("/:id", eventControllers.updateEvent);
router.delete("/:id", eventControllers.deleteEvent);
router.get("/:id/posts", eventControllers.getPosts);
router.get("/:id/participants", eventControllers.getParticipants);
router.post("/:id/participants", verifyToken, eventControllers.addParticipant);
router.delete(
  "/:id/participants",
  verifyToken,
  eventControllers.removeParticipant
);

module.exports = router;
