var Router = require('koa-router');
var router = new Router();
const pagodaQuery = require('../services/pagoda');
const fileQuery = require('../services/file');
var base64ToImage = require('base64-to-image');

function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'PAGODA'
                            +Math.floor(Date.now() / 1000)
                            + Math.ceil(Math.random() * 10000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}

router.post('/pagoda',async (ctx)=>{
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var pagoda = await pagodaQuery.addPagoda(ctx.request.body)
    try {
        if(images){
            for(let i = 0; i < images.length; i++){
                let image = base64toImageConvert(images[i]);
                let file = {
                    name : image,
                    type : "PAGODA",
                    other_id : pagoda.id
                }
                console.log(file)
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status: 200,
            data : pagoda
        }
    }catch(error){
        ctx.body ={
            status : 400,
            data :error.message
        }
    }
});
router.put('/pagoda/:id',async (ctx)=>{
    let id=ctx.params.id;
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var pagoda = await pagodaQuery.updatePagoda(ctx.params.id,ctx.request.body)
    try {
        console.log('other_id',id);
        if(images){
            for(i=0; i<images.length;i++){
                if(images[i].length>100){
                    let type="PAGODA";
                    await fileQuery.deleteFile(id,type);
                }
            }
            for(let j=0; j<images.length; j++){
                let image=images[j].length <100 ? images[j] : base64toImageConvert(images[j]);
                let file={
                    name : image,
                    type : 'PAGODA',
                    other_id : id
                }
                console.log(file);
                fileQuery.addFile(file)
            }
        }
        
        ctx.body = {
            status : 200,
            data : pagoda
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
})
 router.get('/pagoda', async (ctx)=>{
     var pagoda = await pagodaQuery.getAllPagoda();
     try{
         ctx.body ={
             status: 200,
             data : pagoda
         }
     }catch(error){
         ctx.body = {
             status : 400,
             data : error.message
         }
     }
 });
 router.get('/pagoda_list', async (ctx)=>{
    var pagoda = await pagodaQuery.getPagodaList();
    try{
        ctx.body ={
            status: 200,
            data : pagoda
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
 router.get('/pagoda/:id',async (ctx)=>{
     var pagoda = await pagodaQuery.getAllPagodaById(ctx.params.id);
     try{
         ctx.body = {
             status :200,
             data : pagoda
         }
     }catch(error){
         ctx.body ={
             status: 400,
             data : error.message
         }
     }

 });
 router.get('/pagodaDetail/:id',async (ctx)=>{
    var pagoda = await pagodaQuery.getPagodaDetail(ctx.params.id,'PAGODA');
    try{
        ctx.body = {
            status :200,
            data : pagoda
        }
    }catch(error){
        ctx.body ={
            status: 400,
            data : error.message
        }
    }

});
router.get('/pagodaItem_list/:id', async (ctx) =>{
    let data = await pagodaQuery.getPagodaItemList(ctx.params.id,"PAGODA");
    try {
        ctx.body = {
            status: 200,
            data: data
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }

})
 router.delete('/pagoda/:id',async (ctx)=>{
     await pagodaQuery.deletePagodaById(ctx.params.id);
     
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