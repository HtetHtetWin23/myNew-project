var Router=require('koa-router');
var router=new Router();
const studentQuery=require('../services/studentList');

router.get('/student', async(ctx)=>{
    var student = await studentQuery.getAllStudent();
    try{
        ctx.body={
            status  : 200,
            data : student
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
router.get('/student/:id', async(ctx)=>{
    var student = await studentQuery.getAllStudentById(ctx.params.id);
    try{
        ctx.body={
            status  : 200,
            data : student
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
router.delete('/student/:id', async(ctx)=>{
    await studentQuery.deleteStudentById(ctx.params.id);
    try{
        ctx.body={
            status  : 200,
            data : "success"
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
});
router.post('/student', async(ctx)=>{
    var student = await studentQuery.addStudent(ctx.request.body);
    try{
        ctx.body={
            status  : 200,
            data : student
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
router.put('/student/:id', async(ctx)=>{
    var student = await studentQuery.updateStudentById(ctx.params.id,ctx.request.body);
    try{
        ctx.body={
            status  : 200,
            data : student
        }
    }catch(error){
        ctx.body={
            status : 400,
            data : error.message
        }
    }
})
module.exports = router;