const mongoose  = require ('mongoose');
const Schema = mongoose.Schema;

const signupSchema = new Schema({
    firstName : String,
    middleName : String,
    lastName : String,
    email: String,
    password: String
});

module.exports = mongoose.model('Signup ', signupSchema);

