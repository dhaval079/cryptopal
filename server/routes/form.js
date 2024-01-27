//Express js libraries
const express = require("express");
const router = express.Router();

const Form = require("../models/Form");

router.post("/submit", async(req,res)=>{
    try{

        const {q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15} = req.body;

        const response = Form.create({q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15});
        res.json(response);
    }catch(error){
        console.log(success, error.message);
        return res.status(500).send("Some internal error occured");
    }
});

module.exports = router;