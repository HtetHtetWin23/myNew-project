var Router = require('koa-router');
var router = new Router();
var base64ToImage = require('base64-to-image');
const committeeQuery = require('../services/committee');

function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'committee'+Math.floor(Date.now() / 1000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}

router.post('/committee',async (ctx)=>{

    const image = base64toImageConvert(ctx.request.body.image)
    ctx.request.body.image = image
    var committee = await committeeQuery.addCommittee(ctx.request.body);
    try{
        ctx.body = {
            status : 200,
            data : committee
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
router.put('/committee/:id',async (ctx)=>{

    let id = ctx.params.id;
    const image = base64toImageConvert(ctx.request.body.image)
    ctx.request.body.image = image
    var committee = await committeeQuery.updateCommittee(id,ctx.request.body);
    try{
        ctx.body = {
            status : 200,
            data : committee
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
})
router.get('/committee',async (ctx)=>{
    var committee = await committeeQuery.getAllCommittee();
    try{
        ctx.body = {
            status : 200,
            data :committee
        }
    }catch(error){
        ctx.body = {
            status :400,
            data : error.message
        }
    }

});
router.get('/committee/:id', async (ctx)=>{
    var committee = await committeeQuery.getAllCommitteeById(ctx.params.id);
    try{
        ctx.body = {
            status :200,
            data :committee
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data :error.message
        }
    }
});
router.get('/committee/join/:id', async (ctx)=>{
    var committee = await committeeQuery.getJoinResult(ctx.params.id);
    try{
        ctx.body = {
            status :200,
            data :committee
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data :error.message
        }
    }
});
router.delete('/committee/:id', async (ctx)=>{
    await committeeQuery.getCommitteeDeleteById(ctx.params.id);
    try{
        ctx.body = {
            status : 200,
            data : "success"
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }

});

module.exports = router;