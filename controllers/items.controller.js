import Item from "../models/items.model.js";

export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

export const createItem = async (req, res) => {
  if (Array.isArray(req.body)) {
    // Handle bulk creation
    try {
      const items = await Item.insertMany(req.body);
      res.status(201).json({
        status: "success",
        results: items.length,
        data: items,
      });
    } catch (error) {
      res.status(500).json({
        message: "Server Error inserting items",
        error: error.message,
      });
    }
  } else {
    // Handle single item creation
    try {
      const newItem = new Item(req.body);
      const savedItem = await newItem.save();
      res.status(201).json({
        status: "success",
        data: savedItem,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Server Error inserting item", error: error.message });
    }
  }
};
