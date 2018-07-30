const mongoose =require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://192.168.33.10:27017/TodoApp');

module.exports={
    mongoose
};
