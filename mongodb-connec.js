// const mongoclient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');
// The below code allow us to create objectID via mongo
// var obj=new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://192.168.33.10:27017/test' ,(err,client)=>{
    if(err){
        return console.log("Unable to connect to Database server");
    }
    console.log('Connected to MongoDB Server')
    const db=client.db('test');

    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unable to insert todo",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('appuser').insertOne({
    //     name:'Saurabh Jain',
    //     age:34,
    //     location:500019
    // },(err,result)=>{
    //     if(err){
    //         return console.log("Unabel to insert app user ",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    client.close();
});