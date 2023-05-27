var Router = require('koa-router');
var router = new Router();
const clinicQuery = require('../services/clinic');
const fileQuery = require('../services/file');
var base64ToImage = require('base64-to-image');

function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'clinic'
                            +Math.floor(Date.now() / 1000)
                            + Math.ceil(Math.random() * 10000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}

router.post('/clinic',async (ctx)=>{
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var clinic = await clinicQuery.addClinic(ctx.request.body)
    try {
        if(images){
            for(let i = 0; i < images.length; i++){
                let image = base64toImageConvert(images[i]);
                let file = {
                    name : image,
                    type : "CLINIC",
                    other_id : clinic.id
                }
                console.log(file)
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status: 200,
            data : clinic
        }
    }catch(error){
        ctx.body ={
            status : 400,
            data :error.message
        }
    }
});
router.put('/clinic/:id',async (ctx)=>{
    let id=ctx.params.id;
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var clinic = await clinicQuery.updateClinic(ctx.params.id,ctx.request.body)
    try {
        console.log('other_id',id);
        if(images){
            for(i=0; i<images.length;i++){
                if(images[i].length>100){
                    let type="CLINIC";
                    await fileQuery.deleteFile(id,type);
                }
            }
            for(let j=0; j<images.length; j++){
                let image=images[j].length <100 ? images[j] : base64toImageConvert(images[j]);
                let file={
                    name : image,
                    type : 'CLINIC',
                    other_id : id
                }
                console.log(file);
                fileQuery.addFile(file)
            }
        }
        
        ctx.body = {
            status : 200,
            data : clinic
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
})
 router.get('/clinic', async (ctx)=>{
     var clinic = await clinicQuery.getAllClinic();
     try{
         ctx.body ={
             status: 200,
             data : clinic
         }
     }catch(error){
         ctx.body = {
             status : 400,
             data : error.message
         }
     }
 });
 router.get('/clinic_list', async (ctx)=>{
    var clinic = await clinicQuery.getClinicList();
    try{
        ctx.body ={
            status: 200,
            data : clinic
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
 router.get('/clinic/:id',async (ctx)=>{
     var clinic = await clinicQuery.getAllClinicById(ctx.params.id);
     try{
         ctx.body = {
             status :200,
             data : clinic
         }
     }catch(error){
         ctx.body ={
             status: 400,
             data : error.message
         }
     }

 });
 router.get('/clinicDetail/:id',async (ctx)=>{
    var clinic = await clinicQuery.getClinicDetail(ctx.params.id,'CLINIC');
    try{
        ctx.body = {
            status :200,
            data : clinic
        }
    }catch(error){
        ctx.body ={
            status: 400,
            data : error.message
        }
    }

});
 router.delete('/clinic/:id',async (ctx)=>{
     await clinicQuery.getClinicDeleteById(ctx.params.id);
     await fileQuery.deleteFileById(ctx.params.id,"CLINIC")
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