var express = require('express');
var router = express.Router();
var cart = require('../models/shoppingcart');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json( {
    "resource": "/api/cart",
    "description": "Returns the current cart",
    "cart": cart.getCart(),
    "totalCost": cart.totalCost(),
    "totalCartQuantity": cart.getCart().length
  });
});

router.post('/add', function(req, res, next) {
  res.json( {
    "resource": "/api/cart/add",
    "description": "Add an item to the Cart",
    "addItemToCart": cart.addItemToCart(req.body),
    "body": req.body
  });
});

router.delete('/remove/:id', function(req, res, next) {
  res.json( {
    "resource": "/api/cart/remove/:id",
    "description": "Removes an item from the Cart",
    "removeItemFromCart": cart.removeItemFromCart(req.params.id)
  });
});

module.exports = router;
