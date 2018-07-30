var {mongooseValidator_str}=require('./model-validators');
var mongoose=require('mongoose');

var UserObj=mongoose.model('User',{
    name:{
        type:String,
        required:true,
        minlength: 1,
        trim:true
    },
    email:mongooseValidator_str
});

module.exports={
    UserObj
}