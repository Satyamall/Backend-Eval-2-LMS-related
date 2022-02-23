
const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    batch: {type: String, required: true},
},
{ versionKey: false }
);

const Lecture = mongoose.model("lectures", lectureSchema);

module.exports = Lecture;