//library
const maongoose = require('mongoose');
//contect to db
maongoose.connect('mongodb://localhost/contacts_list_db');
//acqurire the connection
const db = maongoose.connection;

//error
db.on('error', console.error.bind(console, 'connection error:'));
///scucess
db.once('open', function() {
    console.log("we're connected!");
});
