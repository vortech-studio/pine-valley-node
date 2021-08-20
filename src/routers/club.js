const express = require("express");
const Club = require("../models/club");
const auth = require("../middleware/auth");
const router = new express.Router();

router.post("/clubs", async (req, res) => {
  const club = new Club(req.body);

  try {
    await club.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/clubs", auth, async (req, res) => {
  try {
    const clubs = await Club.find();
    res.send(clubs);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
