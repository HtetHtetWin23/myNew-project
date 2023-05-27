var Router=require('koa-router');
const router=new Router();
var knex=require('../db/connection');
const productQuery=require('../services/productType');

router.get('/product_type',async(ctx)=>{
    var product_type = await productQuery.getAllProductType();
    try{
        ctx.body ={
            status:200,
            data: product_type
        }
    }catch(error){
        ctx.body-{
            status:400,
            data: error.message
        }
    }
});
router.get('/product_type/:id',async(ctx)=>{
    var id=ctx.params.id;
    var product_type=await productQuery.getProductTypeById(id);
    try{
        ctx.body={
            status:200,
            data: product_type
        }
    }catch(error){
        ctx.body={
            status:400,
            data: error.message
        }
    }
});
router.delete('/product_type/:id',async(ctx)=>{
    var id = ctx.params.id;
    await productQuery.getProductDeleteById(id);
    try{
        ctx.body ={
            status:200,
            data: "success"
        }
    }catch(error){
        ctx.body={
            status:400,
            data:error.message
        }
    }
})
router.post('/product_type',async(ctx)=>{
    var product = await productQuery.addProductType(ctx.request.body);
    try{
        ctx.body={
            status:200,
            data: product
        }
    }catch(error){
        ctx.body={
            status:400,
            data: error.message
        }
    }
});
router.put('/product_type/:id',async(ctx)=>{
    var id = ctx.params.id;
    var product = await productQuery.updateProductType(id, ctx.request.body);
    try{
        ctx.body={
            status:200,
            data: product
        }
    }catch(error){
        ctx.body = {
            status:400,
            data:error.message
        }
      
    }
});
module.exports=router;