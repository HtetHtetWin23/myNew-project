var Router = require('koa-router');
var router = new Router();
var base64ToImage = require('base64-to-image');
const productQuery = require('../services/product');
const fileQuery =require('../services/file')

function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'product'
                            +Math.floor(Date.now() / 1000)
                            + Math.ceil(Math.random() * 10000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}

router.post('/product',async (ctx)=>{
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var product = await productQuery.addProduct(ctx.request.body);
    try{
        if(images){
            for(let i = 0; i < images.length; i++){
                let image = base64toImageConvert(images[i]);
                let file = {
                    name : image,
                    type : "PRODUCT",
                    other_id : product.id
                }
                console.log(file)
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status : 200,
            data : product
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data : error.message
        }
    }
});
router.put('/product/:id',async (ctx)=>{
    let id=ctx.params.id;
    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var product = await productQuery.updateProduct(ctx.params.id,ctx.request.body);
    try{
       
        console.log('other_id',id);
        if(images){
            for(i=0; i<images.length;i++){
                if(images[i].length>100){
                    let type="PRODUCT";
                    await fileQuery.deleteFile(id,type);
                }
            }
            for(let j=0; j<images.length; j++){
                let image=images[j].length <100 ? images[j] : base64toImageConvert(images[j]);
                let file={
                    name : image,
                    type : 'PRODUCT',
                    other_id : id
                }
                console.log(file);
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status : 200,
            data : product
        }
    }catch(error){
        ctx.body = {
            status : 400,
            data :error.message
        }
    }
});



router.get('/product', async (ctx)=>{
    var product = await productQuery.getAllProduct();
    try{
        ctx.body = {
            status:200,
            data :product
        }
    }catch(error){
        ctx.body = {
            status :400,
            data :error.message
        }
    }
});
router.get('/product_list', async (ctx) =>{
    let data = await productQuery.getProductList();
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
router.get('/product_limit', async (ctx) =>{
    let data = await productQuery.getProductLimit();
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
router.get('/product/:id',async (ctx)=>{
    var id = ctx.params.id;
    var product = await productQuery.getAllProductById(id);
    try{
        ctx.body = {
            status : 200,
            data : product
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message

        }
    }
});
router.get('/productDetail/:id',async (ctx)=>{
    var id = ctx.params.id;
    var product = await productQuery.getProductDetail(id,"PRODUCT");
    try{
        ctx.body = {
            status : 200,
            data : product
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message

        }
    }
});

router.delete('/product/:id',async (ctx)=>{
    var id = ctx.params.id;
    await productQuery.getProductDeleteById(id);
   
    try{
        ctx.body = {
            status : 200,
            data : "success"
        }
    }catch(error){
       ctx.body = {
           status : 200,
           data : error.message
       }
    }

});

router.get('/productItem_list/:id', async (ctx) =>{
    let data = await productQuery.getProductItemList(ctx.params.id,"PRODUCT");
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
router.get('/product/join/:id',async (ctx)=>{
    var id = ctx.params.id;
    var product = await productQuery.getJoinResult(id);
    try{
        ctx.body = {
            status : 200,
            data : product
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message

        }
    }
});


module.exports = router;