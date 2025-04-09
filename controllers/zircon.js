var Zircon = require('../models/zircon');

// List of all zircon
exports.zircon_list = async function(req, res) {
    try{
        theZircons = await Zircon.find();
        res.send(theZircons);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.zircon_view_all_Page = async function(req, res) {
    try{
    theZircons = await Zircon.find();
    res.render('zircon', { title: 'Zircon Search Results', results: theZircons });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

// for a specific zircon.
exports.zircon_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Zircon detail: ' + req.params.id);
};
// Handle zircon create on POST.
exports.zircon_create_post = async function(req, res) {
console.log(req.body)
let document = new Zircon();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"zircon_type":"goat", "cost":12, "size":"large"}
document.zircon_type = req.body.purity;
document.cost = req.body.origin;
document.size = req.body.hardness;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
}
// Handle zircon delete from on DELETE.
exports.zircon_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Zircon delete DELETE ' + req.params.id);
};
// Handle zircon update form on PUT.
exports.zircon_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Zircon update PUT' + req.params.id);
};
