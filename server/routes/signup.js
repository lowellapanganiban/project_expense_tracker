const express = require('express');
const router = express.Router();

const Signup = require('../models/signup');

router.get('/', (request, response) =>{
    Signup.find().then( data => {
        //console.log ( data );
        response.send( data );
   });   
 });


module.exports = router;