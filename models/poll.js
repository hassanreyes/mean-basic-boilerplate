var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var User = require("./user");

var schema = new Schema({
   title: { type: String, required: true },         /* Title of the poll */
   choices: [{                                      /* Collection of posible answers */
       name: { type: String, required: true },          /* An answer name */
       votes: { type: Number }                          /* Count of votes for the answer */
   }],
   user: { type: Schema.Types.ObjectId, ref: 'User' }
});

schema.post('remove', function (poll) {
    User.findById(poll.user, function (err, user) {
        user.polls.pull(poll);
        user.save();
    });
});

module.exports = mongoose.model("Poll", schema);