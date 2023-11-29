const axios = require("axios");
const API = process.env.PRODUCTS_API;

const getAllProducts = async (req, res) => {
  const { name, limit, skip } = req.query;
  if (name) {
    try {
      const response = await axios.get(`${API}/search?q=${name}`);
      const data = await response.data;
      res.status(200).json(data);
    } catch (error) {
      console.log(error.message);
      res.status(400).json(error.message);
    }
  } else {
    try {
      const response = await axios.get(`${API}?limit=${limit}&skip=${skip}`);
      const data = await response.data;
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const response = await axios.get(`${API}/${id}`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
};

const getAllCategories = async (req, res) => {
  try {
    const response = await axios.get(`${API}/categories`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const getCategoryByName = async (req, res) => {
  const name = req.params.name;
  try {
    const response = await axios.get(`${API}/category/${name}`);
    const data = await response.data;
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getAllCategories,
  getCategoryByName,
};
