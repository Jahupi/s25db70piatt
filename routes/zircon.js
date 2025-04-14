var express = require('express');
const zircon_controlers = require('../controllers/zircon');
var router = express.Router();
/* GET zircons */
router.get('/', zircon_controlers.zircon_view_all_Page );
router.get('/detail', zircon_controlers.zircon_view_one_Page);
module.exports = router;
