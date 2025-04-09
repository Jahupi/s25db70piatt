var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var zircon_controller = require('../controllers/zircon');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// zircon ROUTES ///
// POST request for creating a zircon.
router.post('/zircon', zircon_controller.zircon_create_post);
// DELETE request to delete zircon.
router.delete('/zircon/:id', zircon_controller.zircon_delete);
// PUT request to update zircon.
router.put('/zircon/:id', zircon_controller.zircon_update_put);
// GET request for one zircon.
router.get('/zircon/:id', zircon_controller.zircon_detail);
// GET request for list of all zircon items.
router.get('/zircon', zircon_controller.zircon_list);
module.exports = router;