const mongoose = require("mongoose")
const zirconSchema = mongoose.Schema({
    clarity: String,
    origin: String,
    hardness: Number
})

module.exports = mongoose.model("Zircon", zirconSchema)

