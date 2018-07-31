var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo-model.js');
var {UserObj}=require('./models/user-model');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    });
});


app.listen(3000,()=>{
    console.log('Started on port: 3000');
});


// var newTodo=new Todo({
//     text:'Cook Dinner'
// });
// var newTodo=new Todo({
//     text:'Cook Dinner',
//     completed:false,
//     completedAt: new Date().getTime()
// });
// var newTodo=new Todo({
//     text:'Test interim spaces    Trimmer'
// });
// var newUser= new UserObj({
//     name:'Saurabh Jain ',
//     email:'jpr.saurabh@gmail.com'
// });
// newUser.save().then((doc)=>{
//     console.log('Saved User ',JSON.stringify(doc,undefined,2));
// },(err)=>{
//     console.log(err);
// });
// newTodo.save().then((doc)=>{
//    console.log('Saved Todo ',JSON.stringify(doc,undefined,2));
// },(err)=>{
//     console.log('Unable to save todo ',err);
// });

module.exports={
    app
}