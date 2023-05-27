var Router = require('koa-router');
var base64ToImage = require('base64-to-image');
var router = new Router();
const positionQuery =  require('../services/position')
 
router.post('/position', async(ctx) => {
    
    var position = await positionQuery.addPosition(ctx.request.body);
    try {
        ctx.body = {
            status: 200,
            data : position
        }
    } catch (error) {
        ctx.body ={
            status: 400,
            data : error.message
        }
    }
})

router.get('/position', async(ctx) => {
    var position = await positionQuery.getAllPosition();
    try {
        ctx.body = {
            status: 200,
            data: position
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
});

router.get(`/position/:id`, async(ctx) => {
    var id = ctx.params.id;
    var position = await positionQuery.getAllPositionById(id)
    try {
        ctx.body = {
            status: 200,
            data : position
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})



router.delete('/position/:id', async(ctx) => {
    var id = ctx.params.id;
    await positionQuery.getPositionDeleteById(id);
    try {
        ctx.body = {
            status: 200,
            data : "success"
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data : error.message
        }
    }
})

router.put('/position/:id', async(ctx) => {
   
    let id = ctx.params.id;
    var position = await positionQuery.updatePosition(id, ctx.request.body);
    try {
        ctx.body = {
            status: 200,
            data : position
        }
    } catch (error) {
        ctx.body ={
            status: 400,
            data : error.message
        }
    }
})


module.exports = router;