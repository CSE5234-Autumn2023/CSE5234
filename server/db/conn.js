const { MongoClient } = require("mongodb");
ATLAS_URI="mongodb+srv://weiblejason:oNCaXFXbkhNxY1Ui@cluster0.urmyxir.mongodb.net/mockProducts?retryWrites=true&w=majority";
const Db = ATLAS_URI;
console.log(Db);
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db)
            {
                _db = db.db("mockProducts");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};