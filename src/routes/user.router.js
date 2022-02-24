

const express= require('express');
const router = express.Router();

const {register, login, getUsers} = require('../controllers/user.controller');
const protect = require('../middlewares/protect');
const upload = require('../utils/file-upload');

router.post("/register", upload.single("profile_photo"),register)
router.post("/login",login)

router.get("/", protect,getUsers);

module.exports = router;