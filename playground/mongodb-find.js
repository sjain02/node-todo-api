const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://192.168.33.10:27017/test' ,(err,client)=>{
    if(err){
        return console.log("Unable to connect to Database server");
    }
    console.log('Connected to MongoDB Server')
    const db=client.db('test');
    // db.collection('Todos').find().toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch Todos ',err);
    // });

    // db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch Todos ',err);
    // });
    db.collection('Todos').count().then((counter)=>{
        console.log(counter);
    },(err)=>{
        console.log(err);
    });
    db.collection('appuser').find({name:'Saurabh%'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log(err);
    });
    
    // client.close();
});