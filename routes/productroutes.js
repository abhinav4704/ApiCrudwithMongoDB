const express = require('express');
const router = express.Router();
const {
  fetchProduct,
  fetchProducts,
  insertProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productcontroller.js");

// Fetch all products
router.get('/api/products', fetchProducts);

// Fetch a product by id
router.get('/api/products/:id', fetchProduct);

// Insert products
router.post('/api/products', insertProduct);

// Update products
router.put('/api/products/:id', updateProduct);

// Delete products
router.delete('/api/products/:id', deleteProduct);

module.exports = router;
