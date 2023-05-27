var Router = require('koa-router');
var router = new Router();
const knex = require('../db/connection');
const sliderQuery = require('../services/slider');



router.get('/slider',async (ctx)=>{
    var data = await sliderQuery.getAllSlider();
    try{
        ctx.body ={
            status : 200,
            data : data
        }
    }catch(error){
        ctx.body ={ 
            status : 400,
            data : error.message
        }
    }
});
router.get('/slider/:id',async(ctx)=>{
    var data= await sliderQuery.getAllSliderById(ctx.params.id);
    try{
        ctx.body ={
            status : 200,
            data : data
        }
    }catch(error){
        ctx.body ={ 
            status : 400,
            data : error.message
        }
    }

});
router.delete('/slider/:id',async (ctx)=>{
    await sliderQuery.getSliderDeleteById(ctx.params.id);
    try{
        ctx.body ={
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
router.post('/slider',async(ctx)=>{
    var data=await sliderQuery.addSlider(ctx.request.body);
    try{
        ctx.body ={
            status : 200,
            data : data
        }
    }catch(error){
        ctx.body ={ 
            status : 400,
            data : error.message
        }
    }
});
router.put('/slider/:id',async(ctx)=>{
    var data= await sliderQuery.updateSlider(ctx.params.id,ctx.request.body);
    try{
        ctx.body ={
            status : 200,
            data : data
        }
    }catch(error){
        ctx.body ={ 
            status : 400,
            data : error.message
        }
    }
})
module.exports = router;