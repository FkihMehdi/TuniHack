const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      minlength: [6, "Must be at least 6 characters long"],
      maxlength: [30, "Must be no more than 30 characters long"],
    },
    type: {
      type: String,
      required: true,
      enum: [
        "workshop",
        "competition",
        "seminar",
        "conference",
        "other",
        "hackathon",
      ],
    },
    tags: {
      type: [String],
      required: true,
      enum: [
        "web development",
        "mobile development",
        "data science",
        "cybersecurity",
        "cloud computing",
        "machine learning",
        "artificial intelligence",
        "blockchain",
        "internet of things",
        "physics",
        "chemistry",
        "biology",
        "mathematics",
        "engineering",
        "medicine",
      ],
    },
    description: {
      type: String,
      required: true,
      minlength: [10, "Must be at least 10 characters long"],
      maxlength: [250, "Must be no more than 250 characters long"],
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
      minlength: [5, "Must be at least 5 characters long"],
      maxlength: [50, "Must be no more than 50 characters long"],
    },
    image: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    participants: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    posts: [
      {
        type: mongoose.Types.ObjectId,
        ref: "post",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("event", EventSchema);
