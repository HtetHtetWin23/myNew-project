const knex = require('../db/connection');
function getAllSlider(){
    return knex('slider').select('*').where('status','1');
}
function getAllSliderById(id){
    return knex('slider').where({id : id}).select();
}
function getSliderDeleteById(id){
    return knex('slider').where({id : id}).update({status : '0'});
}
function addSlider(slider){
    return knex('slider').insert(slider).then((result)=>getAllSliderById(result));
}
function updateSlider(id,slider){
    return knex('slider').where({id : id }).update(slider).then((result)=>getAllSliderById(result));
}
module.exports={
    getAllSlider,
    getAllSliderById,
    getSliderDeleteById,
    addSlider,
    updateSlider

}