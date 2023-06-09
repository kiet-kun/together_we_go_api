const Booking = require("../models/booking.js");
const mongoose = require("mongoose");
exports.createBooking = (req, res) => {
  console.log("create booking");
  const booking = new Booking({
    authorId: req.params.userId,
    price: req.body.price,
    status: req.body.status,
    bookingType: req.body.bookingType,
    time: req.body.time,
    content: req.body.content,
    startPointLat: req.body.startPointLat,
    startPointLong: req.body.startPointLong,
    startPointId: req.body.startPointId,
    startPointMainText: req.body.startPointMainText,
    startPointAddress: req.body.startPointAddress,
    endPointLat: req.body.endPointLat,
    endPointLong: req.body.endPointLong,
    endPointLatLng: req.body.endPointLng,
    endPointId: req.body.endPointId,
    endPointMainText: req.body.endPointMainText,
    endPointAddress: req.body.endPointAddress,
    duration: req.body.duration,
    distance: req.body.distance,
  });
  console.log(booking);
  booking
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Booking added succesfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Fail to create todo!",
      });
    });
};
exports.getAllListBooking = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("authorId")
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
exports.getListAvailableBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ status: "complete" })
      .populate("authorId")
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      authorId: req.params.userId,
    })
      .populate("authorId")
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
exports.getMyCompleteBooking = async (req, res) => {
  try {
    const bookings = await Booking.find({
      authorId: req.params.userId,
      status: "complete",
    })
      .populate("authorId")
      .sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};
