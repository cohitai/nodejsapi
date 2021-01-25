const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;

const CONNECTION_URL = "mongodb+srv://cohitai:malzeit1984@cluster0.ufrty.mongodb.net/Livingdocs?retryWrites=true&w=majority";
const DATABASE_NAME = "Livingdocs";

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
    MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("articles_sqlike");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});

app.get("/", function(req, res) {
    res.send("App works!!");
})


app.get("/doc/:lower_id&:upper_id", (request, response) => {
   
        var x = parseInt(request.params.lower_id,10);
        var y = parseInt(request.params.upper_id,10);
        collection.find({'id':{'$gt':x,'$lt':y}}).toArray((error, result) => {
            if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


app.get("/docid/:range", (request, response) => {
   
        var x = parseInt(request.params.range,10);
        collection.find().sort({"id":-1}).limit(x).toArray((error, result) => {
            if(error) {
            return response.status(500).send(error);
        }
        response.send(result);
    });
});


