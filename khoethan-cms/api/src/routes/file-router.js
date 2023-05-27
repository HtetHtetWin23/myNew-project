var Router = require('koa-router');
var router = new Router();
const fileQuery = require('../services/file')

router.get(`/product_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id, "PRODUCT")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
// router.put(`/product_image/:id`, async(ctx) => {
//     var id = ctx.params.id;
//     var file = await fileQuery.updateFileById(id,"PRODUCT",ctx.request.body)
//     try {
//         ctx.body = {
//             status: 200,
//             data : file
//         }
//     } catch (error) {
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })

router.get(`/school_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id,"SCHOOL")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
// router.put(`/school_image/:id`, async(ctx) => {
//     var id = ctx.params.id;
//     var file = await fileQuery.updateFileById(id,"SCHOOL",ctx.request.body)
//     try {
//         ctx.body = {
//             status: 200,
//             data : file
//         }
//     } catch (error) {
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })

router.get(`/post_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id, "POST")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
// router.put(`/post_image/:id`, async(ctx) => {
//     var id = ctx.params.id;
//     var file = await fileQuery.updateFileById(id,"POST",ctx.request.body)
//     try {
//         ctx.body = {
//             status: 200,
//             data : file
//         }
//     } catch (error) {
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })

router.get(`/committee_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id, "COMMITTEE")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
// router.put(`/committee_image/:id`, async(ctx) => {
//     var id = ctx.params.id;
//     var file = await fileQuery.updateFileById(id, "COMMITTEE",ctx.request.body)
//     try {
//         ctx.body = {
//             status: 200,
//             data : file
//         }
//     } catch (error) {
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })

router.get(`/clinic_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id, "CLINIC")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
// router.put(`/clinic_image/:id`, async(ctx) => {
//     var id = ctx.params.id;
//     var file = await fileQuery.updateFileById(id, "CLINIC",ctx.request.body)
//     try {
//         ctx.body = {
//             status: 200,
//             data : file
//         }
//     } catch (error) {
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })
router.get(`/monestry_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id, "MONESTRY")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
// router.put(`/monestry_image/:id`, async(ctx) => {
//     var id = ctx.params.id;
//     var file = await fileQuery.updateFileById(id, "MONESTRY",ctx.request.body)
//     try {
//         ctx.body = {
//             status: 200,
//             data : file
//         }
//     } catch (error) {
//         ctx.body = {
//             status: 400,
//             data: error.message
//         }
//     }
// })

router.get(`/festival_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id, "FESTIVAL")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
router.get(`/pagoda_image/:id`, async(ctx) => {
    var id = ctx.params.id;
    var file = await fileQuery.getFileById(id, "PAGODA")
    try {
        ctx.body = {
            status: 200,
            data : file
        }
    } catch (error) {
        ctx.body = {
            status: 400,
            data: error.message
        }
    }
})
module.exports = router;