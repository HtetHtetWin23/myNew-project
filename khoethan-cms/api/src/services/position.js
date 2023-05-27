const knex = require('../db/connection');
function getAllPosition(){
    return knex.select('*').table('position').where('status','1');
}
function getAllPositionById(id){
   return knex.where({id:id}).select().table('position').then((result)=>result[0]);
}
function getPositionDeleteById(id){
    return knex('position').where({id: id}).update({status :'0'});
}
function addPosition(position){
    return knex('position').insert(position).then((result)=>getAllPositionById(result));
}
function updatePosition(id,position){
    return knex('position').where({id:id}).update(position).then((result)=>getAllPositionById(id));
}
module.exports={
    getAllPosition,
    getAllPositionById,
    getPositionDeleteById,
    addPosition,
    updatePosition

};