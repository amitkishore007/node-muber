const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DriverSchema = new Schema({

    name: {
        type: String,
        required: [true, 'Username is required'],
        validate:{
            validator:(name)=> name.length > 2,
            message: 'username must be atleat  3 characters long'
        }
    },
    email: {
        type: String,
        require:[true, 'User Email Address is required'],
    }
    
});

const Driver  = mongoose.model('driver', DriverSchema);

module.exports = Driver;