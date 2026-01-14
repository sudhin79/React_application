import Food from "../models/foodModel.js";

export const addFood = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file?.filename;

    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const newFood = await Food.create({
      name,
      description,
      price,
      category,
      image
    });

    res.status(201).json({
      success: true,
      message: "Food item added successfully",
      data: newFood
    });
  } catch (err) {
    console.error("Error adding food:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
