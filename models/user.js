var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongooseUniqueValidator = require("mongoose-unique-validator");

var schema = new Schema({
   firstName: { type: String, required: true },
   lastName: { type: String, required: true },
   password: { type: String, requited: true },
   email: { type: String, required:true, unique: true },
   polls: [{type: Schema.Types.ObjectId, ref: "Poll" }]
});

schema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", schema);