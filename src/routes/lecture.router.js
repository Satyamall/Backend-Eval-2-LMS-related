
const express = require('express');
const router = express.Router();
const { createLecture, getLecture, patchLecture, deleteLecture, getLectureById } = require('../controllers/lecture.controller');
const protect = require('../middlewares/protect');
const authorization = require('../middlewares/authorization');
const {instructor,admin} = require("../utils/constants");

router.post("/", protect, authorization([instructor,admin]),createLecture);
router.get("/", protect,getLecture);
router.patch("/:lecture_id", protect, authorization([instructor,admin]),patchLecture);
router.delete("/:lecture_id", protect, authorization([instructor,admin]),deleteLecture);
router.get("/:id", protect,getLectureById);

module.exports = router;