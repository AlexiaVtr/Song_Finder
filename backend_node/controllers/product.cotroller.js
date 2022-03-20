import Product from "../models/Product";


export const newProduct = async (req, res) => {
  try {
    const { name, description, brand, price } = req.body;
    const newProduct = new Product({ name, description, brand, price });
    await newProduct.save();
    res.status(201).json({ msg: 1 });
  } catch (e) {
    res.status(400).json({ msg: 2 });
  }
};
export const getProductAll = async (req, res) => {
    const json = await Product.find().lean()
    res.json(json)
}