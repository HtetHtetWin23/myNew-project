var Router = require('koa-router');
var router = new Router();
const festivalQuery = require('../services/festival');
const fileQuery = require('../services/file');
var base64ToImage = require('base64-to-image');

function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'FESTIVAL'
                            +Math.floor(Date.now() / 1000)
                            + Math.ceil(Math.random() * 10000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}

router.post('/festival',async (ctx)=>{
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var festival = await festivalQuery.addFestival(ctx.request.body)
    try {
        if(images){
            for(let i = 0; i < images.length; i++){
                let image = base64toImageConvert(images[i]);
                let file = {
                    name : image,
                    type : "FESTIVAL",
                    other_id : festival.id
                }
                console.log(file)
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status: 200,
            data : festival
        }
    }catch(error){
        ctx.body ={
            status : 400,
            data :error.message
        }
    }
});
router.put('/festival/:id',async (ctx)=>{
    let id=ctx.params.id;
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var festival = await festivalQuery.updateFestival(ctx.params.id,ctx.request.body)
    try {
        console.log('other_id',id);
        if(images){
            for(i=0; i<images.length;i++){
                if(images[i].length>100){
                    let type="FESTIVAL";
                    await fileQuery.deleteFile(id,type);
                }
            }
            for(let j=0; j<images.length; j++){
                let image=images[j].length <100 ? images[j] : base64toImageConvert(images[j]);
                let file={
                    name : image,
                    type : 'FESTIVAL',
                    other_id : id
                }
                console.log(file);
                fileQuery.addFile(file)
            }
        }
        
        ctx.body = {
            status : 200,
            data : festival
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
})
 router.get('/festival', async (ctx)=>{
     var festival = await festivalQuery.getAllFestival();
     try{
         ctx.body ={
             status: 200,
             data : festival
         }
     }catch(error){
         ctx.body = {
             status : 400,
             data : error.message
         }
     }
 });
 router.get('/festival_list', async (ctx)=>{
    var festival = await festivalQuery.getFestivalList();
    try{
        ctx.body ={
            status: 200,
            data : festival
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
 router.get('/festival/:id',async (ctx)=>{
     var festival = await festivalQuery.getAllFestivalById(ctx.params.id);
     try{
         ctx.body = {
             status :200,
             data : festival
         }
     }catch(error){
         ctx.body ={
             status: 400,
             data : error.message
         }
     }

 });
 router.get('/festivalDetail/:id',async (ctx)=>{
    var festival = await festivalQuery.getFestivalDetail(ctx.params.id,'FESTIVAL');
    try{
        ctx.body = {
            status :200,
            data : festival
        }
    }catch(error){
        ctx.body ={
            status: 400,
            data : error.message
        }
    }

});
 router.delete('/festival/:id',async (ctx)=>{
     await festivalQuery.deleteFestivalById(ctx.params.id);
    
     try{
         ctx.body = {
             status : 200,
             data : "success"
         }
     }catch(error){
         ctx.body ={
             status : 400,
             data : error.message
         }
     }
 });

 module.exports = router;