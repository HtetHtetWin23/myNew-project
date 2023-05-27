var Router=require('koa-router');
var router=new Router();
const knex= require('../db/connection');
const contactQuery=require('../services/contact');

router.get('/contact',async (ctx)=>{
    var contact = await contactQuery.getAllContact();
    try{
        ctx.body ={
            status : 200,
            data : contact
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data :error.message
        }
    }
});
router.get('/contact/:id',async (ctx)=>{
    var contact= await contactQuery.getAllContactById(ctx.params.id);
                        
    try{
        ctx.body ={
            status : 200,
            data : contact
        }
    }catch(error){
        ctx.body ={
            status : 400,
            data : error.message
        }
    }
  
    
});
router.delete('/contact/:id',async (ctx)=>{
    await contactQuery.getContactDeleteById(ctx.params.id);
    try{
        ctx.body = {
            status : 200,
            data : "success"
        }
    }catch(error) {
        ctx.body = {
            status : 400,
            data : error.message
        }

    }
        
});
router.post('/contact',async (ctx)=>{
    var contact = await contactQuery.addContact(ctx.request.body);
    try{
        ctx.body ={
            status : 200,
            data : contact
        }
    }catch(error){
        ctx.body ={
            status : 400,
            data : error.message
        }
    }
});

module.exports = router;