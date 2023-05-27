const Router = require('koa-router');

// import router files
const indexRoutes = require('./index');
const userRoutes = require('./user-router');
const authRoutes = require('./auth-router');
const positionRoutes=require('./position-router');

const productTypeRoutes=require('./productType-router');
const productRoutes=require('./product-router');
const monestryRoutes=require('./monestry-router');
const committeeRoutes=require('./committee-router');
const postRoutes=require('./post-router');

const schoolRoutes=require('./school-router');

const clinicRoutes=require('./clinic-router');
const sliderRoutes=require('./slider-router');
const studentRoutes=require('./studentList-router');

const societyMemberRoutes=require('./societyMember-router');
const announceRoutes=require('./announcement-router')
const contactRoutes=require('./contact-router');
const fileRoutes = require('./file-router')
// const listRoutes = require('./list-router')

const festivalRoutes=require('./festival-router');
const pagodaRoutes=require('./pagoda-router')


const router = new Router({ prefix: '/api/v1'});

// use router files
router.use(indexRoutes.routes(), router.allowedMethods());
router.use(userRoutes.routes(), router.allowedMethods());
router.use(authRoutes.routes(), router.allowedMethods());
router.use(positionRoutes.routes(),router.allowedMethods());


router.use(productTypeRoutes.routes(),router.allowedMethods());
router.use(monestryRoutes.routes(),router.allowedMethods());
router.use(productRoutes.routes(),router.allowedMethods());
router.use(committeeRoutes.routes(),router.allowedMethods());
router.use(schoolRoutes.routes(),router.allowedMethods());


router.use(postRoutes.routes(),router.allowedMethods());
router.use(clinicRoutes.routes(),router.allowedMethods());
router.use(sliderRoutes.routes(),router.allowedMethods());
router.use(studentRoutes.routes(),router.allowedMethods());

router.use(societyMemberRoutes.routes(),router.allowedMethods());
router.use(contactRoutes.routes(),router.allowedMethods());
router.use(announceRoutes.routes(),router.allowedMethods());
router.use(fileRoutes.routes(),router.allowedMethods());
// router.use(listRoutes.routes(),router.allowedMethods())

router.use(festivalRoutes.routes(),router.allowedMethods());
router.use(pagodaRoutes.routes(),router.allowedMethods());





module.exports = router;