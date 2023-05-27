const Router = require('koa-router');
const userQueries = require('../services/users');
const messageConfig = require('../config/msgConfig');
const jwt = require('../middlewares/jwt');

const router = new Router();
const BASE = '/users';



router.get('/users/CurrentUser',async (ctx) => {
    try {        
        const user = await userQueries.getCurrentUser(ctx.request.query["id"]);   
        if(user) {
            ctx.body = {
                status: messageConfig.status.success,
                data: user
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: messageConfig.status.error,
                message: messageConfig.message.error.fileNotFound
            };
        }
    } catch(err) {
        ctx.status = 400;
        ctx.body = {
            status: messageConfig.status.error,
            message: err.message || messageConfig.message.error.internalError
        };
    }
});

router.get(BASE,  async(ctx) => {
    try{
        let users=[];       
        users = await userQueries.getAllUsers();        
        ctx.body = {
            status: messageConfig.status.success,
            data: users
        };
    } catch(err) {
        ctx.status = 400;
        ctx.body = {
            status: messageConfig.status.error,
            message: err.message || messageConfig.message.error.internalError
        };
    }
});

router.get(`${BASE}/:id`, async (ctx) => {
    try {        
        const user = await userQueries.getUserById(ctx.params.id);    
        if(user) {
            ctx.body = {
                status: messageConfig.status.success,
                data: user
            };
        } else {
            ctx.status = 404;
            ctx.body = {
                status: messageConfig.status.error,
                message: messageConfig.message.error.fileNotFound
            };
        }
    } catch(err) {
        ctx.status = 400;
        ctx.body = {
            status: messageConfig.status.error,
            message: err.message || messageConfig.message.error.internalError
        };
    }
});

// router.get(`${BASE}/email/:email`, async (ctx) => {
//     try {        
//         const user = await userQueries.getUserByEmail(ctx.params.email);    
//         if(user) {
//             ctx.body = {
//                 status: messageConfig.status.success,
//                 data: user
//             };
//         } else {
//             ctx.status = 404;
//             ctx.body = {
//                 status: messageConfig.status.error,
//                 message: messageConfig.message.error.fileNotFound
//             };
//         }
//     } catch(err) {
//         ctx.status = 400;
//         ctx.body = {
//             status: messageConfig.status.error,
//             message: err.message || messageConfig.message.error.internalError
//         };
//     }
// });

router.post(`${BASE}`,async (ctx) => {
    try {        
        const user = await userQueries.addUser(ctx.request.body);
        if(user && user != 'error') {
            ctx.status = 200;
            ctx.body = {
                status: messageConfig.status.success,
                data: user
            };
        } else {            
            ctx.status = 404;
            ctx.body = {
                status: messageConfig.status.error,
                message: messageConfig.message.error.userExisted
            };
        }
    } catch(err) {        
        ctx.status = 400;
        ctx.body = {
            status: messageConfig.status.error,
            message: err.message || messageConfig.message.error.internalError
        };
    }
});
// router.post(`${BASE}/create`,async (ctx) => {
//     let data= ctx.request.body;
//     try {   
//         const checkUsername = await userQueries.getCheckUsername(data.user_name);
//         if(checkUsername.length===0){
//             const user = await userQueries.createUser(ctx.request.body);
//             if (user && user != 'error') {
//                 ctx.status = 201;
//                 ctx.body = {
//                     status: messageConfig.status.success,
//                     data: user
//                 };
//             } else {
//                 ctx.status = 404;
//                 ctx.body = {
//                     status: messageConfig.status.error,
//                     message: messageConfig.message.error.fileNotFound
//                 };
//             }
//         }
//         else{
//             ctx.status = 200;
//             ctx.body = {
//                 status: messageConfig.status.error,
//                 message: "Username already existed."
//             };
//         }
//     } catch(err) {        
//         ctx.status = 400;
//         ctx.body = {
//             status: messageConfig.status.error,
//             message: err.message || messageConfig.message.error.internalError
//         };
//     }
// });

router.put(`${BASE}/:id`, async (ctx) => {
    try {                     
        const user = await userQueries.updateUser(ctx.params.id, ctx.request.body);
        if(user && user != 'error') {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: user
            };            
        } else {            
            ctx.status = 404;
            ctx.body = {
                status: messageConfig.status.error,
                message: messageConfig.message.error.fileNotFound
            };
        }
    } catch (err) {
        // console.log('Router Exception Error .... : ' + err);        
        ctx.status = 400;
        ctx.body = {
            status: messageConfig.status.error,
            message: err.message || messageConfig.message.error.internalError
        };
    }
});

router.delete(`${BASE}/:id`, async (ctx) => {
    try {        
        const user = await userQueries.deleteUser(ctx.params.id); 
        // console.log('User router delete: ' + JSON.stringify(user));        
        if(user && user != 'error') {
            ctx.status = 200;
            ctx.body = {
                status: 'success',
                data: user
            };            
        } else {            
            ctx.status = 404;
            ctx.body = {
                status: messageConfig.status.error,
                message: messageConfig.message.error.fileNotFound
            };
        }
    } catch (err) {
        // console.log('Router Exception Error .... : ' + err);        
        ctx.status = 400;
        ctx.body = {
            status: messageConfig.status.error,
            message: err.message || messageConfig.message.error.internalError
        };
    }
});


module.exports = router;
