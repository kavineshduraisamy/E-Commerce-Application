const express = require('express');
const router = express.Router();
const KurtaController = require('../controllers/KurtaController');
const checkAuth = require('../middleware/CheckAuth')

//post product
router.post('/insertProduct',checkAuth,KurtaController.insertProduct);
//Get product
router.route("/").get(KurtaController.get_product);

router.post('/filter',KurtaController.filter);

router.get('/:code',KurtaController.getProductByCode);

router.put('/:code',KurtaController.updateProduct);

module.exports = router;