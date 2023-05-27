import React from "react";
import api from "../../apis";
import {Table,Button} from 'antd'
import {Link} from 'react-router-dom'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'

class Clinic extends React.Component{
    
    constructor(){
        super();
        this.state ={
            data : []
        }
    }
    componentWillMount(){
        this.getAllClinic();
    }
    componentDidMount(){
        this.getAllClinic();
    }
    getAllClinic(){
        api.get('clinic').then(res=>this.setState({data : res.data}))
    }
    deleteClinic(id){
        api.delete(`clinic/${id}`).then(()=>this.getAllClinic());
        noti('success','ဖျက်ပြီးပါပြီ!')
    }
    
    render(){
        const columns =[
            {
                title : "အမည်",
                dataIndex : "name",
                key : "name"
            }, 
            // {
            //     title : "ဖော်ပြချက်",
            //     dataIndex : "description",
            //     key : "description"
            // },
            // {
            //     title : "ရာထူး",
            //     dataIndex : "position_name",
            //     key : "position_name"
            // },
            {
                title : "ဖုန်းနံပါတ်",
                dataIndex : "phone_no",
                key : "phone_no"
            },
           
            {
                title : "လုပ်ဆောင်ချက်များ",
                dataIndex :"action",
                render : (text,record)=>{
                    return <span>
                        <Button className="btn"><Link to={`clinic/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to={`clinic/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn" onClick={()=>this.deleteClinic(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            }
        ]
        const {data} = this.state.data;
        console.log({data})

        
        return(
            <div>
                <PageHeaderWrapper />
                <h3>၀န်ထမ်းစာရင်း</h3>
                <div>
                <Button className="btn"><Link to="/clinic/create">ထည့်ရန်</Link></Button>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default Clinic;