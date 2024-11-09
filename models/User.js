const mongoose = require("mongoose");
const { isEmail, contains } = require("validator");
const filter = require("../util/filter");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: [6, "Must be at least 6 characters long"],
      maxlength: [30, "Must be no more than 30 characters long"],
      validate: {
        validator: (val) => !contains(val, " "),
        message: "Must contain no spaces",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, "Must be valid email address"],
    },
    tags: [
      {
        type: String,
        enum: [
          //science and technology
          "competitve programming",
          "web development",
          "app development",
          "machine learning",
          "artificial intelligence",
          "cyber security",
          "data science",
          "cloud computing",
          "blockchain",
          "iot",
          "quantum computing",
          "physics",
          "chemistry",
          "biology",
          "mathematics",
          "astronomy",
          "geology",
          "engineering",
        ],
      },
    ],
    age: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "Must be at least 8 characters long"],
    },
    biography: {
      type: String,
      default: "",
      maxLength: [250, "Must be at most 250 characters long"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: ["Admin", "Member", "Association"],
      default: "Member",
    },
    events_created: [
      {
        type: mongoose.Types.ObjectId,
        ref: "event",
      },
    ],
    events_attending: [
      {
        type: mongoose.Types.ObjectId,
        ref: "event",
      },
    ],
    associations_enrolled: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    members: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (filter.isProfane(this.username)) {
    throw new Error("Username cannot contain profanity");
  }

  if (this.biography.length > 0) {
    this.biography = filter.clean(this.biography);
  }

  next();
});

module.exports = mongoose.model("user", UserSchema);
