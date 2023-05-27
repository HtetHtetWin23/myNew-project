const knex = require('../db/connection');

function getAllProduct(){
    return knex.select('product.*','product_type.product_type_name as product_type_name').from('product')
    .leftJoin('product_type', 'product.productType_id', 'product_type.id').where('product.status','1').orderBy('product.id','desc');
}
function getProductList(){
    return knex.select('product.*','file.name as file_name').from('product')
    .leftJoin('file','file.other_id','product.id').where({'product.status':'1','file.type':'PRODUCT'}).orderBy('product.id','desc');
}
function getProductLimit(){
    return knex.select('product.*','file.name as file_name').from('product')
    .leftJoin('file','file.other_id','product.id').where({'product.status':'1','file.type':'PRODUCT'}).orderBy('product.id','desc').limit(4)
    
    
}
function getProductItemList(id,type){
    return knex.select('product.*','file.name as file_name').from('product')
    .leftJoin('file', 'product.id', 'file.other_id').where({'product.status':'1','product.productType_id':id,'file.type':type}).orderBy('product.id','desc');
}

function getAllProductById(id){
    return knex.select('product.*','product_type.product_type_name as productType_name').from('product')
    .leftJoin('product_type', 'product.productType_id', 'product_type.id')
    .where({'product.id' : id}).then(result=>result[0])
  
}
function getProductDetail(id,type){
    return knex.select('product.*','file.name as file_name').from('product')
    .leftJoin('file','product.id','file.other_id').where({'product.id' : id,'file.type':type}).then(result=>result[0])
}
function getJoinResult(id){
    return knex.select('product.*','product_type.product_type_name as productType_name').from('product')
    .leftJoin('product_type', 'product.productType_id', 'product_type.id')
    .where({'product.productType_id' : id})
}

function getProductDeleteById(id){
    return knex('product').where({ id : id}).update({status : '0'});
}
function addProduct(product){
    return knex('product').insert(product).then((result)=>getAllProductById(result));
}
function updateProduct(id,product){
    return knex('product').where({ id : id}).update(product).then((result)=>getAllProductById(result));
}




module.exports = {
    getAllProduct,
    getAllProductById,
    getProductDeleteById,
    addProduct,
    updateProduct,
    getProductItemList,
    getProductLimit,
    getProductList,
    getJoinResult,
    getProductDetail
     
   
}