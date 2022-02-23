
const express = require('express');
const router = express.Router();
const { createLecture, getLecture, patchLecture, deleteLecture, getLectureById } = require('../controllers/lecture.controller');
const protect = require('../middlewares/protect');

router.post("/", protect,createLecture);
router.get("/", protect,getLecture);
router.patch("/:lecture_id", protect,patchLecture);
router.delete("/:lecture_id", protect,deleteLecture);
router.get("/:id", protect,getLectureById);

module.exports = router;