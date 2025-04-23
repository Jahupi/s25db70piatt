var express = require('express');
const zircon_controlers = require('../controllers/zircon');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET zircons */
router.get('/', zircon_controlers.zircon_view_all_Page );

/* GET detail zircon page */
router.get('/detail', zircon_controlers.zircon_view_one_Page);

/* GET create zircon page */
router.get('/create', zircon_controlers.zircon_create_Page);

/* GET update costume page */
router.get('/update', secured,
zircon_controlers.zircon_update_Page);


/* GET delete zircon page */
router.get('/delete', zircon_controlers.zircon_delete_Page);

module.exports = router;
