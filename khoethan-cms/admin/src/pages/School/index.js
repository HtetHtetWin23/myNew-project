import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from "react-router-dom"
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import '../../App.css'
import {noti} from '../../utils'


class School extends React.Component{
    
    
    constructor(){
        super();
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllSchool();

    }
    componentDidMount(){
        this.getAllSchool();

    }
    getAllSchool(){
        api.get('school').then(res=>this.setState({data:res.data.data}))
    }
    deleteSchool(id){
        api.delete(`school/${id}`).then(()=>this.getAllSchool());
        noti('success','ဖျက်ပြီးပါပြီ!')


    }
    
    render(){
        
        const columns=[
            {
                title : "အမည်",
                dataIndex : "name",
                key : "name"
            },
            {
                title : "ဖော်ပြချက်",
                dataIndex : "description",
                key : "description"
            },
           
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        <Button className="btn"><Link to={`school/${record.id}`}>ကြည့်ရန်</Link></Button>
                        <Button className="btn"><Link to={`school/update/${record.id}`}>ပြင်ရန်</Link></Button>
                        <Button className="btn" onClick={()=>this.deleteSchool(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
       const data =this.state.data;
       console.log(data)
        return(
            <div>
                <PageHeaderWrapper/>
                <h3>အတန်းများ</h3>
                <div>
                    <Button className="btn"><Link to="/school/create">ထည့်ရန်</Link></Button>
                </div>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
        
    }

}
export default School;