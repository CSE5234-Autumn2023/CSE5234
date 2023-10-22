const { MongoClient } = require("mongodb");
ATLAS_URI="mongodb+srv://weiblejason:oNCaXFXbkhNxY1Ui@cluster0.urmyxir.mongodb.net/mockProducts?retryWrites=true&w=majority";
const Db = ATLAS_URI;
console.log(Db);
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    connectToServer: async function (callback) {
        try {
            await client.connect();
        } catch (e) {
            console.error(e);
        }
        _db = client.db("mockProducts");

        return (_db === undefined ? false : true);
    },

    getDb: function () {
        return _db;
    },
};