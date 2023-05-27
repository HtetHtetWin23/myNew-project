var knex=require('../db/connection');
function getAllProductType(){
    return knex.select('*').table('product_type').where('status','1');
}
function getProductTypeById(id){
    return knex('product_type').where({id:id}).select().then((result)=>result[0])
}
function addProductType(product){
    return knex('product_type').insert(product).then((result)=>getProductTypeById(result));
}
function getProductDeleteById(id){
    return knex('product_type').where({id:id}).update({status : '0'});
}
function updateProductType(id,product){
    return knex('product_type').where({id:id}).update(product).then((result)=>getProductTypeById(id));

    // return knex('product_type').where({id:id}).update(product).then((result)=>getProductById(id));
}

module.exports={
    getAllProductType,
    getProductTypeById,
    addProductType,
    getProductDeleteById,
    updateProductType
};