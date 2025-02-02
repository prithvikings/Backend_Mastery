const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require("../models/product-Model");
router.get("/", (req, res) => {
  res.send(" Products");
});

router.post("/create", upload.single("image"), async (req, res) => {
  try {
    let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    let product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });
    req.flash("success", "Product created successfully");
    res.redirect("/owners/admin");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
