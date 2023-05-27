const knex=require('../db/connection');

function getAllSocietyMember(){
    return knex.select('society_member.*','position.name as position_name').from('society_member')
    .leftJoin('position', 'society_member.position_id', 'position.id').where('society_member.status','1')
}
function getAllSocietyMemberById(id){
    return knex.select('society_member.*','position.name as position_name').from('society_member')
    .leftJoin('position', 'society_member.position_id', 'position.id').where({'society_member.id':id,'society_member.status':'1'}).then(result=>result[0])
}
function getJoinResult(id){
    return knex.select('society_member.id','society_member.name','position.name').from('society_member')
    .innerJoin('position','society_member.position_id','position.id').where({'society_member.id' : id})
}
function addSocietyMember(member){
    return knex('society_member').insert(member).then((result)=>getAllSocietyMemberById(result));
}
function deleteSocietyMemberById(id){
    return knex('society_member').where({id : id}).update({status : '0'});
}
function updateSocietyMemberById(id,member){
    return knex('society_member').where({id:id}).update(member).then((result)=>getAllSocietyMemberById(result));

    
}
module.exports={
    getJoinResult,
    addSocietyMember,
    getAllSocietyMember,
    getAllSocietyMemberById,
    deleteSocietyMemberById,
    updateSocietyMemberById


}