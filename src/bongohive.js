var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

const db =client.db('bongohive');
const collection = db.collection('startups');

collection.insertOne([
   { id: ' '},
    {name: 'name of startup'},
    {description: 'description of the startup'},
    {startDate: 'date when the startup started'},
    {founder: 'name of startup founder'}
]
)

 module.exports = MongoClient;