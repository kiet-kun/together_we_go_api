const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  avatarUrl: {
    type: String,
    default:
      "https://res.cloudinary.com/dxoblxypq/image/upload/v1679984586/9843c460ff72ee89d791bffe667e451c_rzalqh.jpg",
    // default link save in cloudinary
  },
  phoneNumber: {
    type: String,
    default: null,
  },
  online: {
    type: Boolean,
    default: false,
  },
  time: { type: Date },
  birth_date: { type: String },
  gender: { type: String, default: "male" }, // "male" or "female"
  location_id: { type: String, default: "" },
  location_mainText: { type: String, default: "" },
  location_address: { type: String, default: "" },
});

module.exports = mongoose.model("user", userSchema);
