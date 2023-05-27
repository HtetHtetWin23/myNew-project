var Router=require('koa-router');
var router=new Router();
var base64ToImage =require('base64-to-image')
const fileQuery =require('../services/file')
const schoolQuery = require('../services/school');

function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'school'
                            +Math.floor(Date.now() / 1000)
                            + Math.ceil(Math.random() * 10000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}


router.post('/school',async (ctx)=>{
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var school = await schoolQuery.addSchool(ctx.request.body);
    try{
        if(images){
            for(let i = 0; i < images.length; i++){
                let image = base64toImageConvert(images[i]);
                let file = {
                    name : image,
                    type : "SCHOOL",
                    other_id : school.id
                }
                console.log(file)
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status : 200,
            data : school
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
router.put('/school/:id', async (ctx)=>{
    let id=ctx.params.id;
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var school = await schoolQuery.updateSchool(ctx.params.id,ctx.request.body);
    try{
        if(images){
            for(i=0; i<images.length;i++){
                if(images[i].length>100){
                    let type="SCHOOL";
                    await fileQuery.deleteFile(id,type);
                }
            }
            for(let j=0; j<images.length; j++){
                let image=images[j].length <100 ? images[j] : base64toImageConvert(images[j]);
                let file={
                    name : image,
                    type : 'SCHOOL',
                    other_id : id
                }
                console.log(file);
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status : 200,
            data : school
        }
    }catch(error){POST
        ctx.body = {
            status : 400,
            data :error.message
        }
    }

});
router.get('/school', async (ctx)=>{
    var school = await schoolQuery.getAllSchool();
    try {
        ctx.body = {
            status : 200,
            data : school
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : errord.message
        }
    }
});
router.get('/school_list', async (ctx)=>{
    var school = await schoolQuery.getSchoolList();
    try {
        ctx.body = {
            status : 200,
            data : school
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : errord.message
        }
    }
});
router.get('/school/:id',async (ctx)=>{
    const id=ctx.params.id;
    var school = await schoolQuery.getAllSchoolById(id);
    try{
        ctx.body = {
            status : 200,
            data : school
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
router.get('/schoolDetail/:id',async (ctx)=>{
    const id=ctx.params.id;
    var school = await schoolQuery.getSchoolDetail(id,"SCHOOL");
    try{
        ctx.body = {
            status : 200,
            data : school
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
router.delete('/school/:id', async (ctx)=>{
    await schoolQuery.getSchoolDeleteById(ctx.params.id);
  
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