const knex=require('../db/connection');
function getAllSchool(){
    return knex('school').select('*').where('status','1');
}
function getSchoolList(){
    return knex.select('school.*','file.name as file_name').from('school')
    .leftJoin('file', 'school.id', 'file.other_id').where('file.type','SCHOOL')
}
function getAllSchoolById(id){
    return knex.select('school.*','file.name as file_name').from('school')
    .leftJoin('file','school.id','file.other_id').where({'school.id' : id},'file.type','SCHOOL').then(result=>result[0])
}

function getSchoolDetail(id,type){
    return knex.select('school.*','file.name as file_name').from('school')
    .leftJoin('file','school.id','file.other_id').where({'school.id' : id,'file.type':type}).then(result=>result[0])
}
function getSchoolDeleteById(id){
    return knex('school').where({id : id}).update({status : '0'});
}
function addSchool(school){
    return knex('school').insert(school).then((result)=>getAllSchoolById(result));
}
function updateSchool(id,school){
    return knex('school').where({id : id}).update(school).then((result)=>getAllSchoolById(result));
}
module.exports = {
    getAllSchool,
    getSchoolList,
    getAllSchoolById,
    getSchoolDetail,
    getSchoolDeleteById,
    addSchool,
    updateSchool
}