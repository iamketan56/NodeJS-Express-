const express = require('express');
const path = require('path');
const port = 8000;
//database connection
const db = require('./Config/mongoos');
//database
const Contact = require('./models/contact');
const app = express();

app.set('view engine', 'ejs');
//__dirname is current directory
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded()); // middleware


app.use(express.static('assests'));


var ContactList = [
    {
        name:"Ketan",phone:"9787639200"
    },{
        name:"Vijay",phone:"9743239200"
    },
    {
        name:"Karan",phone:"7987639200"
    }
]
//controller function fetch from data base 
app.get('/', function (req, res) {
    Contact.find({}, function (err, contacts) {
        if (err) {
            console.log('Error in fetching');
            return;
        }
        
            return res.render('home', {
                title: "Contact List", contact_list: contacts
            });
        
    });
  
});

app.get('/delete_contact/', function (req, res) {
    console.log(req.query);
    //get the id from query in the ul
    let id = req.query.id;
    // find the contact with id and thne delete it
    Contact.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log('Error in delting the DATA from DB');
            return;
        }
        return res.redirect('back');    
    });
});

app.post('/create-contact', function (req, res) {
 
    //  ContactList.push(req.body);
    //now push data into db
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function (err, newContact) {
        if (err) {
            console.log('Error in creating in contact');
            return;
        }
        console.log('****', newContact);
        return res.redirect('back')
    });
    
});
app.listen(port, function (err)
{
    if (err) {
        console.log("Error in running server", err);

    }
    else
    {
        console.log("Seems like good running at ", port);
        }
});
