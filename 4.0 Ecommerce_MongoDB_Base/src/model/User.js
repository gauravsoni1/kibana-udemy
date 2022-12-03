const mongoose = require("mongoose");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: {
        type: String, required: true, unique: true, validate: {
            validator: function (v) {
                return validator.isEmail(v);
            },
            message: props => `The entered value ${props.value} is not a valid Email.`
        }
    },
    password: { type: String, required: true }
})


module.exports = mongoose.model("User", UserSchema, "User");