
const Lecture = require('../models/lecture.model');
const User = require("../models/user.model");

const createLecture = async (req,res)=>{
    try{
        const user = await User.findOne({ _id: req.body.author_id._id });
        const arr = user.roles;
        if(arr === "admin" || arr === "instructor")
        {
            const lecture = await Lecture.create(req.body);
            return res.status(201).json({data: lecture});
        }
        res.status(404).json({message: "User is not an Admin nor Instructor"});
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
}

const getLecture = async (req,res)=>{
    try{
        
        const lectures = await Lecture.find({}).populate("author_id");
        return res.status(200).json({data: lectures});
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
}

const patchLecture = async (req,res)=>{
    try{
        const admin = await User.findOne({ _id: req.body.author_id._id });
        const arr = admin.roles;
       const user = await Lecture.findOne({author_id: req.body.author_id}).populate("author_id");
       if( !user) return res.status(404).json({message: "User not created this lecture"});
       if(arr === "admin" || user)
       {
        if(!req.body.title) return res.status(400).json({msg: "Title is required"});
        const lecture = await Lecture.findOneAndUpdate({ 
            _id: req.params.lecture_id 
        },{
            $set: {
                title: req.body.title,
                batch: req.body.batch
            }
        },{
            returnOriginal: false
        }
            )
        if(!lecture) return res.status(404).json({msg: "Lecture not found"})
        res.status(200).json({data: lecture})
       }
       res.status(404).json({message: "User is not an Admin nor This Instructor Who created this"});
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
}

const deleteLecture =  async (req,res)=>{
    try{
        const user = await Lecture.findOne({_id: req.params.lecture_id});
        const arr = user.author_id.roles;
        if( arr === "admin")
        {
        const lecture = await Lecture.findOneAndDelete({ _id: req.params.lecture_id })
        if(!lecture) return res.status(404).json({msg: "User not found"})
        res.status(200).json({data: lecture})
        }
        return res.status(404).json("This instructor not created this");
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
}

const getLectureById = async (req,res)=>{
    try{
        const lecture = await Lecture.findOne({_id: req.params.id}).populate("author_id");
        if(!lecture) return res.status(500).json({msg: "Lecture not found"})        
        res.status(200).json({data: lecture});
    }
    catch(err){
        return res.status(500).json({status: "failed", message: "Something went wrong!"});
    }
}

module.exports = {
    createLecture,
    getLecture,
    patchLecture,
    deleteLecture,
    getLectureById
}