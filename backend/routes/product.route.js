import express from 'express'; // Import express
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js'; // Correct import path

const router = express.Router(); // Initialize router
console.log('Router initialized:', router);
console.log('Router GET method:', router.get);

// Define routes
router.get('/', getProducts); // Define GET route
router.post('/', createProduct); // Define POST route
router.put('/:id', updateProduct); // Define PUT route
router.delete('/:id', deleteProduct); // Define DELETE route

export default router; // Export router

