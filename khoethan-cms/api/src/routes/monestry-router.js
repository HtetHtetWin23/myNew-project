var Router = require('koa-router');
var router = new Router();
const monestryQuery = require('../services/monestry');
const fileQuery = require('../services/file');
var base64ToImage = require('base64-to-image');

function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'MONESTRY'
                            +Math.floor(Date.now() / 1000)
                            + Math.ceil(Math.random() * 10000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}

router.post('/monestry',async (ctx)=>{
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var monestry = await monestryQuery.addMonestry(ctx.request.body)
    try {
        if(images){
            for(let i = 0; i < images.length; i++){
                let image = base64toImageConvert(images[i]);
                let file = {
                    name : image,
                    type : "MONESTRY",
                    other_id : monestry.id
                }
                console.log(file)
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status: 200,
            data : monestry
        }
    }catch(error){
        ctx.body ={
            status : 400,
            data :error.message
        }
    }
});
router.put('/monestry/:id',async (ctx)=>{
    let id=ctx.params.id;
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var monestry = await monestryQuery.updateMonestry(ctx.params.id,ctx.request.body)
    try {
        console.log('other_id',id);
        if(images){
            for(i=0; i<images.length;i++){
                if(images[i].length>100){
                    let type="MONESTRY";
                    await fileQuery.deleteFile(id,type);
                }
            }
            for(let j=0; j<images.length; j++){
                let image=images[j].length <100 ? images[j] : base64toImageConvert(images[j]);
                let file={
                    name : image,
                    type : 'MONESTRY',
                    other_id : id
                }
                console.log(file);
                fileQuery.addFile(file)
            }
        }
        
        ctx.body = {
            status : 200,
            data : monestry
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
})
 router.get('/monestry', async (ctx)=>{
     var monestry = await monestryQuery.getAllMonestry();
     try{
         ctx.body ={
             status: 200,
             data : monestry
         }
     }catch(error){
         ctx.body = {
             status : 400,
             data : error.message
         }
     }
 });
 router.get('/monestry_list', async (ctx)=>{
    var monestry = await monestryQuery.getAllMonestryList();
    try{
        ctx.body ={
            status: 200,
            data : monestry
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
 router.get('/monestry/:id',async (ctx)=>{
     var monestry = await monestryQuery.getAllMonestryById(ctx.params.id);
     try{
         ctx.body = {
             status :200,
             data : monestry
         }
     }catch(error){
         ctx.body ={
             status: 400,
             data : error.message
         }
     }

 });
 router.get('/monestryDetail/:id',async (ctx)=>{
    var monestry = await monestryQuery.getMonasteryDetail(ctx.params.id,'MONESTRY');
    try{
        ctx.body = {
            status :200,
            data : monestry
        }
    }catch(error){
        ctx.body ={
            status: 400,
            data : error.message
        }
    }

});
 router.delete('/monestry/:id',async (ctx)=>{
     await monestryQuery.getMonestryDeleteById(ctx.params.id);
    
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