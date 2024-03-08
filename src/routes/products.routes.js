const express = require('express');
const router = express.Router();

const products = require('../controllers/products');

router.get("/", (req, res) => res.redirect("/productos/list"))

router.get('/list', products.list); 

router.get('/detalle/:id', products.detail ); 


module.exports = router;
