var express = require('express');
const zircon_controlers = require('../controllers/zircon');
var router = express.Router();
/* GET zircons */
router.get('/', zircon_controlers.zircon_view_all_Page );

/* GET detail zircon page */
router.get('/detail', zircon_controlers.zircon_view_one_Page);

/* GET create zircon page */
router.get('/create', zircon_controlers.zircon_create_Page);

/* GET create update page */
router.get('/update', zircon_controlers.zircon_update_Page);

module.exports = router;
