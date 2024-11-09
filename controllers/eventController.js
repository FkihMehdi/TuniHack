
const Event = require("../models/Event");
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    return res.json(events);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const getEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id);
    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ error: "Event not found" });
  }
};

const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, image, tags, type } = req.body;
    const creator = req.body.userId;
    const event = await Event.create({
      title,
      description,
      date,
      location,
      image,
      creator,
      tags,
      type,
    });
    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, date, location, image, tags, type } = req.body;
    const event = await Event.findByIdAndUpdate(
      id,
      { title, description, date, location, image, tags, type },
      { new: true }
    );
    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await Event.findByIdAndDelete(id);
    return res.json({ message: "Event deleted" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate("posts");
    return res.json(event.posts);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const getParticipants = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate("participants");
    return res.json(event.users);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const addParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const event = await Event.findById(id);
    event.participants.push(userId);
    await event.save();
    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const removeParticipant = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    const event = await Event.findById(id);
    event.participants = event.participants.filter((p) => p != userId);
    await event.save();
    return res.json(event);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  getPosts,
  getParticipants,
  addParticipant,
  removeParticipant,

};
