const { Router } = require("express");
const User = require("../models/User");
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      return res.status(400).json({ message: "Пользователь существует" });
    }
  } catch (e) {
    res.status(500).json({ message: "Что то пошло не так" });
  }
});

router.post("/login", async (req, res) => {
  return res.status(200).json();
});

module.exports = router;
