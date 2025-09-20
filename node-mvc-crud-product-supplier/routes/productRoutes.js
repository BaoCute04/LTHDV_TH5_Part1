const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API quản lý sản phẩm
 */

// Web routes (render EJS)
router.get("/", productController.index);
router.get("/new", productController.new);
router.post("/", productController.create);
router.get("/:id/edit", productController.edit);
router.post("/:id", productController.update); // dùng POST thay vì PUT cho form EJS
router.post("/:id/delete", productController.delete); // dùng POST thay vì DELETE cho form EJS

// API routes (Swagger)
router.get("/:id", productController.show);
router.put("/:id", productController.update);
router.delete("/:id", productController.delete);

module.exports = router;