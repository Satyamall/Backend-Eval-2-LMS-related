

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    roll_number: {type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    batch: {type: String, required: true},
},
{ versionKey: false }
);

const Student = mongoose.model("students", studentSchema);

module.exports = Student;