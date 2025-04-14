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
document.clarity = req.body.clarity;
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
};


// Handle Zircon delete on DELETE.
exports.zircon_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Zircon.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };


//Handle Zircon update form on PUT.
exports.zircon_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Zircon.findById( req.params.id)
// Do updates of properties
if(req.body.clarity)
toUpdate.clarity = req.body.clarity;
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



// Handle a show one view with id specified by query
exports.zircon_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Zircon.findById(req.query.id)
    res.render('zircondetail',
    { title: 'Zircon Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a zircon.
// No body, no in path parameter, no query.
// Does not need to be async
exports.zircon_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('zirconcreate', { title: 'Zircon Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };