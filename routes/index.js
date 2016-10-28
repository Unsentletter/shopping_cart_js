var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Funky Town' });
});

router.get('/api', function(req, res, next) {
  res.json({
    "GET /api/cart": "returns the items in the cart",
    "POST /api/cart/add": "Adds an item to the cart",
    "DELETE /api/cart/remove/:id": "Removes an the item from the cart"
  });
});

module.exports = router;
