const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://192.168.33.10:27017/test' ,(err,client)=>{
    if(err){
        return console.log("Unable to connect to Database server");
    }
    console.log('Connected to MongoDB Server')
    const db=client.db('test');
    
    // db.collection('Todos').findOneAndUpdate({"_id" : ObjectID("5b5f311fd3224632143dcfd8")},{$set:{completed:true}},{returnOriginal:false}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // });
    db.collection('appuser').findOneAndUpdate({name:'Saurabh'},{$set:{name:'Shilpa Jain'},$inc:{age:1}},{returnOriginal:false}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
    },(err)=>{
        console.log(err);
    });
});