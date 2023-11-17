const express = require('express');
const router = express.Router();
const SportsController = require('../controllers/SportsController');
const checkAuth = require('../middleware/CheckAuth')

//post product
router.post('/insertProduct',checkAuth,SportsController.insertProduct);
//Get product
router.route("/").get(SportsController.get_product);

router.post('/filter',SportsController.filter);

router.get('/:code',SportsController.getProductByCode);

router.put('/:code',SportsController.updateProduct);

module.exports = router;