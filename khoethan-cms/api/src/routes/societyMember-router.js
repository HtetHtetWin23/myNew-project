var Router=require('koa-router');
var router=new Router();
const societyMemberQuery=require('../services/societyMember');

router.get('/society_member', async(ctx)=>{
    var member = await societyMemberQuery.getAllSocietyMember();
    try{
        ctx.body={
            status  : 200,
            data : member
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
router.get('/society_member/:id', async(ctx)=>{
    var member = await societyMemberQuery.getAllSocietyMemberById(ctx.params.id);
    try{
        ctx.body={
            status  : 200,
            data : member
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
router.delete('/society_member/:id', async(ctx)=>{
    await societyMemberQuery.deleteSocietyMemberById(ctx.params.id);
    try{
        ctx.body={
            status  : 200,
            data : "success"
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
});
router.post('/society_member', async(ctx)=>{
    var member = await societyMemberQuery.addSocietyMember(ctx.request.body);
    try{
        ctx.body={
            status  : 200,
            data : member
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
router.put('/society_member/:id', async(ctx)=>{
    var member = await societyMemberQuery.updateSocietyMemberById(ctx.params.id,ctx.request.body);
    try{
        ctx.body={
            status  : 200,
            data : member
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
module.exports = router;