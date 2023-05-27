// import React from 'react'

// class Table extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             data: [],
//             image:''
//         }
//     }
//     componentWillMount(){
//         this.getAllSchool();
//         this.getAllStudent();
//     }
//     getAllSchool = ()=>{
//         api.get('school_list').then(result=>this.setState({
//             data : result.data.data
//         }))
//     }
//     getAllStudent =()=>{
//         api.get('student').then(result=>this.setState({
//             studentData : result.data.data
//         }))
//     }
// }