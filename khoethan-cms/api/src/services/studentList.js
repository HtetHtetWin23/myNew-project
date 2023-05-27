const knex=require('../db/connection');

function getAllStudent(){
    return knex.select('*').table('student_list').where('status','1')
}
function getAllStudentById(id){
    return knex('student_list').where({id:id}).select().then((result)=>result[0])
}
function addStudent(student){
    return knex('student_list').insert(student).then((result)=>getAllStudentById(result));
}
function deleteStudentById(id){
    return knex('student_list').where({id:id}).update({status : '0'});
}
function updateStudentById(id,student){
    return knex('student_list').where({id:id}).update(student).then((result)=>getAllStudentById(id));

    
}
module.exports={
    addStudent,
    getAllStudentById,
    deleteStudentById,
    updateStudentById,
    getAllStudent
}