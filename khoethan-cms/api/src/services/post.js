const knex = require('../db/connection');

function getAllPost(){
    return knex('post').select('*').where('status','1').orderBy('created_at','desc')
    
}
function getLatestPost(){
    return knex.select('post.*','file.name as file_name').from('post')
    .leftJoin('file', 'post.id', 'file.other_id').where({'post.status':'1','file.type':'POST'})
}
function getPostLimit(){
    return knex('post').select('*').where('status','1').orderBy('created_at','desc').limit(4)
   
}
function getAllPostById(id){
        return knex.select('post.*','file.name as file_name').from('post')
    .leftJoin('file','post.id','file.other_id').where({'post.status':'1','post.id' : id},'file.type','POST').then(result=>result[0])
}


function getPostDetail(id,type){
    return knex.select('post.*','file.name as file_name').from('post')
    .leftJoin('file','post.id','file.other_id').where({'post.id' : id,'file.type':type}).then(result=>result[0])
}
function getPostDeleteById(id){
    return knex('post').where({id : id}).update({status : '0'});
}
function addPost(post){
    return knex('post').insert(post).then((result)=>getAllPostById(result));
}
function updatePost(id,post){
    return knex('post').where({id : id}).update(post).then((result)=>getAllPostById(result));
}
module.exports = {
    getAllPost,
    getPostLimit,
    getAllPostById,
    getPostDetail,
    getPostDeleteById,
    addPost,
    updatePost,
    getLatestPost
}