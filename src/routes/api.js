const express=require('express');
const ProductController=require('../controller/ProductController');

const router=express.Router();





router.post("/createProducts", ProductController.createProducts);
router.get("/readProducts", ProductController.readProducts);
router.get("/readProductsById/:id", ProductController.readProductsById);
router.post("/deleteProducts/:id", ProductController.deleteProducts);
router.post("/updateProducts/:id", ProductController.updateProducts);









module.exports = router;