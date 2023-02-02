const express = require('express');
const router = express.Router();

const Login = require('../models/login');

//CRRUD Functionalities
router.get('/', (request, response) => {
    Login.find().then( data => {
        //console.log ( data );
        response.send( data );
   });   
 });

 router.get('/:id', (request, response) => {
    Login.find().then( data => {
        //console.log ( data );
        response.send( data );
   });   
 });
/*DELETE - /api/v1/login/hg7674673647364 */
 router.delete('/:id', ( request, response) => {
        Login.deleteOne({_id: request.params.id}).then ( data =>{
            //console.log ( data);
            if (data.deletedCount === 1){
                response.send({message: `Task deleted`});
            }else{
                response.send({error: `Task with id ${request.params.id} does not exist!`}); 
            }

        });
 });

 /*POST - /api/v1/login */
 router.post('/',(request, response) => {
    // console.log( request.body);
    // response.send (`OK!`);
    const newLogin = new Login (request.body);
    newLogin.email = "Input email" //default value

     newLogin.save().then( data => {  
        if (data._id){
            response.send( data );
        }else{
            response.send({ error: `Resource was not created`});
        }
       
     });
 });
 /*UPDATE
 PUT - /api/v1/login/:id 
 */
router.put('/:id', ( request, response) => {
    Login.updateOne({ _id: request.params.id}, [{ $set: request.body}]).then ( data =>{
        //console.log(data);
        if ( data.modifiedCount === 1){
            response.send({message: 'Resource has been updated'})
        }else{response.send({ error: 'Error in update'})}
    });
});




module.exports = router;