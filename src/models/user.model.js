
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profile_photo_url: {type: String},
    roles: {type: String}
},
{versionKey: false }
);

userSchema.pre("save", function(next){
    if(!this.isModified("password")) return next();

    bcrypt.hash(this.password, 0, (err, hash) =>{

        if(err) return next(err);

        this.password = hash;

        next();
    })
})

userSchema.methods.checkPassword = function (password){
    const passwordHash = this.password;
    return new Promise((resolve, reject)=>{
        bcrypt.compare(password,passwordHash, (err, same)=>{
            if(err) return reject(err);

            resolve(same);
        })
    })
}

const User = mongoose.model("users", userSchema);

module.exports = User;