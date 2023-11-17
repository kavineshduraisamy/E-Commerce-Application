const express = require('express');
const router = express.Router();
const JeanController = require('../controllers/JeanController');
const checkAuth = require('../middleware/CheckAuth')

//post product
router.post('/insertProduct',checkAuth,JeanController.insertProduct);
//Get product
router.route("/").get(JeanController.get_product);

router.post('/filter',JeanController.filter);

router.get('/:code',JeanController.getProductByCode);

router.put('/:code',JeanController.updateProduct);

module.exports = router;