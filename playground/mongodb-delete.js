const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://192.168.33.10:27017/test' ,(err,client)=>{
    if(err){
        return console.log("Unable to connect to Database server");
    }
    console.log('Connected to MongoDB Server')
    const db=client.db('test');
    // deleteMany
    // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then((result)=>{
    //     console.log(result);
    // });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
        console.log(result);
    });
    // client.close();
});