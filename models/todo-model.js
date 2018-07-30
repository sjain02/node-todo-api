var mongoose=require('mongoose');

var {mongooseValidator_str}=require('./model-validators');
var Todo=mongoose.model('Todo',{
    text:{
        type:String,
        required:true,
        minlength: 1,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    completedAt:{
        type:Number
    }
});

module.exports={
    Todo
}