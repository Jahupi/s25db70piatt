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
exports.zircon_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Zircon.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
// Handle zircon create on POST.
exports.zircon_create_post = async function(req, res) {
console.log(req.body)
let document = new Zircon();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"zircon_type":"goat", "cost":12, "size":"large"}
document.purity = req.body.purity;
document.origin = req.body.origin;
document.hardness = req.body.hardness;
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
//Handle Zircon update form on PUT.
exports.zircon_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Zircon.findById( req.params.id)
// Do updates of properties
if(req.body.purity)
toUpdate.purity = req.body.purity;
if(req.body.origin) toUpdate.origin = req.body.origin;
if(req.body.hardness) toUpdate.hardness = req.body.hardness;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
