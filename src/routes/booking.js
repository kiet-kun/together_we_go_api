const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/booking.js");

router.post("/createBooking/:userId", bookingController.createBooking);
router.get("/getAllListBooking", bookingController.getAllListBooking);
router.get("/getMyBooking/:userId", bookingController.getMyBookings);
router.get(
  "/getMyCompleteBooking/:userId",
  bookingController.getMyCompleteBooking
);
module.exports = router;
