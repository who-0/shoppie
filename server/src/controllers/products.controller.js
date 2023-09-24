const axios = require("axios");
const API = process.env.PRODUCTS_API;

const getAllProducts = async (req, res) => {
  try {
    const response = await axios.get(API);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const response = await axios.get(`${API}/1`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = { getAllProducts, getProduct };
