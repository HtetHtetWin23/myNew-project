import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from 'react-router-dom'
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'

class StudentList extends React.Component{
    
    
    constructor(){
        super()
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllStudent();

    }
    componentDidMount(){
        this.getAllStudent();

    }
    getAllStudent(){
        api.get('student').then(res=>this.setState({data:res.data.data}))
    }
    deleteStudent(id){
        api.delete(`student/${id}`).then(()=>this.getAllStudent());
        noti('success','ဖျက်ပြီးပါပြီ!')


    }
    
    render(){
        const columns=[
            {
                title : "အတန်း",
                dataIndex : 'grade',
                key : 'grade'
            },
            {
                title : "အတန်းပိုင်အမည်",
                dataIndex : 'teacher_name',
                key : 'teacher_name'
            },
            ,
            // {
            //     title : "ကျောင်းသူ",
            //     dataIndex : 'school_girl',
            //     key : 'school_girl'
            // },
            // ,
            // {
            //     title : "ကျောင်းသား",
            //     dataIndex : 'school_boy',
            //     key : 'school_boy'
            // },
            // ,
            // {
            //     title : "စုစုပေါင်း",
            //     dataIndex : 'total_student',
            //     key : 'total_student'
            // },
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        <Button className="btn"><Link to={`studentList/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;
                        <Button className="btn"><Link to={`studentList/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;
                        <Button className="btn" onClick={()=>this.deleteStudent(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        const data=this.state.data;
        console.log(data)
        return(
            <div>
                <PageHeaderWrapper />
                <h3>ကျောင်းသားစာရင်း</h3>
                <div>
                    <Button className="btn"><Link to="/studentList/create">ထည့််ရန်</Link></Button>
                </div><br></br>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
        
    }

}
export default StudentList;