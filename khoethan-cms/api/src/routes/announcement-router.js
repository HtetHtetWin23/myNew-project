var Router = require ('koa-router');
var router = new Router();
const knex = require('../db/connection');
const announceQuery = require('../services/announcement');

router.get(`/announce`,async(ctx)=>{
    var announce = await announceQuery.getAllAnnouncement();
    try{
        ctx.body ={
            status:200,
            data: announce
        }
    }catch(error){
        ctx.body ={
            status:400,
            data:error.message
        }
    }
});
router.get(`/announce_limit`,async(ctx)=>{
    var announce = await announceQuery.getAllAnnouncementLimit();
    try{
        ctx.body ={
            status:200,
            data: announce
        }
    }catch(error){
        ctx.body ={
            status:400,
            data:error.message
        }
    }
});
router.get(`/announce/:id`,async (ctx)=>{
    var id =ctx.params.id;
    var announce =await announceQuery.getAllAnnouncementById(id);
    try{
        ctx.body ={
            status:200,
            data : announce
        }
    }catch(error){
        ctx.body={
            status:400,
            data :error.message
        }
    }
});

router.delete('/announce/:id',async(ctx)=>{
    var id =ctx.params.id;
   await announceQuery.getAnnouncementDeleteById(id);
    try{
        ctx.body={
            status:200,
            data: "success"
        }
    }catch(error){
        ctx.body={
            status:400,
            data : error.message
        }
    }
});
router.post('/announce',async(ctx)=>{
    var  announce =await announceQuery.addAnnouncement(ctx.request.body);
    try{
        ctx.body ={
            status:200,
            data:announce
        }
    }catch(error){
            ctx.body ={
                status:400,
                data:error.message
            }
    }
});
router.put('/announce/:id',async(ctx)=>{
    var id =ctx.params.id;
    var announce =await announceQuery.updateAnnouncement(id,ctx.request.body);
    try{
        ctx.body={
            status:200,
            data: announce
        }
    }catch(error){
        ctx.body ={
            status:400,
            data: error.message
        }
    }
});

module.exports=router;