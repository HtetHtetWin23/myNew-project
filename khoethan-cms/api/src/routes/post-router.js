var Router = require('koa-router');
var base64ToImage = require('base64-to-image');
var router = new Router();
const postQuery = require('../services/post')
const fileQuery = require('../services/file')


function base64toImageConvert(image){
    var base64Str = image;
    var path ='./uploads/';
    var optionalObj = {'fileName': 'post'
                            +Math.floor(Date.now() / 1000)
                            + Math.ceil(Math.random() * 10000), 'type':'png'};
    base64ToImage(base64Str,path,optionalObj); 
    var imageInfo = base64ToImage(base64Str,path,optionalObj); 
    return imageInfo.fileName;
}
router.post('/post', async(ctx) => {
    let id =ctx.params.id;
    const title_image = base64toImageConvert(ctx.request.body.title_image)
    ctx.request.body.title_image = title_image;

    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var post = await postQuery.addPost(ctx.request.body)
    try {
        if(images){
            for(let i = 0; i < images.length; i++){
                let image = base64toImageConvert(images[i]);
                let file = {
                    name : image,
                    type : "POST",
                    other_id : post.id
                }
                console.log(file)
                fileQuery.addFile(file)
            }
        }
       
        ctx.body = {
            status: 200,
            data: post
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
router.put(`/post/:id`, async(ctx) => {
    let id=ctx.params.id;
    const title_image = base64toImageConvert(ctx.request.body.title_image)
    ctx.request.body.title_image = title_image;

    let images = ctx.request.body.image
    ctx.request.body.image = "ACTIVE"
    var post = await postQuery.updatePost(id,ctx.request.body);
    console.log(images.length)
    try {
       
        console.log('other_id',id);
        if(images){
            for(i=0; i<images.length;i++){
                if(images[i].length>100){
                    let type="POST";
                    await fileQuery.deleteFile(id,type);
                }
            }
            for(let j=0; j<images.length; j++){
                let image=images[j].length <100 ? images[j] : base64toImageConvert(images[j]);
                let file={
                    name : image,
                    type : 'POST',
                    other_id : id
                }
                console.log(file);
                fileQuery.addFile(file)
            }
        }
        ctx.body = {
            status: 200,
            data: post
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})

router.get('/post', async(ctx) => {
    let data = await postQuery.getAllPost();
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
router.get('/post_list', async(ctx) => {
    let data = await postQuery.getLatestPost();
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
router.get('/post_limit', async(ctx) => {
    let data = await postQuery.getPostLimit();
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

router.get('/post/:id', async(ctx) => {
    let id = ctx.params.id;
    let data = await postQuery.getAllPostById(id);
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
router.get('/postDetail/:id', async(ctx) => {
    let id = ctx.params.id;
    let data = await postQuery.getPostDetail(id,"POST");
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

router.delete('/post/:id', async(ctx) => {
    let id = ctx.params.id;
    await postQuery.getPostDeleteById(id);
    try {
        ctx.body = {
            status: 200,
            data: "success"
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})




module.exports = router;