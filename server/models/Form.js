const mongoose = require("mongoose")
const { Schema } = mongoose

const FormSchema = new Schema({
    q1:{
        type: String,
    },
    q2:{
        type: String,
    },
    q3:{
        type: String,
    },
    q4:{
        type: String,
    },
    q5:{
        type: String,
    },
    q6:{
        type: String,
    },
    q7:{
        type: String,
    },
    q8:{
        type: String,
    },
    q9:{
        type: String,
    },
    q10:{
        type: String,
    },
    q11:{
        type: String,
    },
    q12:{
        type: String,
    },
    q13:{
        type: String,
    },
    q14:{
        type: String,
    },
    q15:{
        type: String,
    },
});

const Form = mongoose.model('form', FormSchema);
module.exports = Form;