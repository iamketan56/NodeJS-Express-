const mongoose = require('mongoose');
const contactSechema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone:
    {
        type: String,
        required: true
    }
});
const Contact = mongoose.model('Contact', contactSechema);
module.exports = Contact;