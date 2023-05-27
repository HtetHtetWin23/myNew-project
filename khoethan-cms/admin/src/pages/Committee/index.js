import React from "react";
import api from "../../apis";
import {Table,Button} from 'antd'
import {Link} from 'react-router-dom'
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'
class Committee extends React.Component{
    constructor(){
        super();
        this.state ={
            data : [

            ]
        }
    }
    componentWillMount(){
        this.getAllCommittee();
    }
    componentDidMount(){
        this.getAllCommittee();
    }
    getAllCommittee(){
        api.get('committee').then(res=>this.setState({data : res.data}))
    }
    deleteCommittee(id){
        api.delete(`committee/${id}`).then(()=>this.getAllCommittee());
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
            {
                title : "ရာထူး",
                dataIndex : 'position_name',
                key : 'position_name'
            },
            // {
            //     title : "ဖုန်းနံပါတ်",
            //     dataIndex : 'phone_no',
            //     key : 'phone_no'
            // },
           
            {
                title : "လုပ်ဆောင်ချက်များ",
                dataIndex :"action",
                render : (text,record)=>{
                    return <span>
                        <Button className="btn"><Link to={`committee/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to={`committee/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn" onClick={()=>this.deleteCommittee(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            }
        ]
        const {data} = this.state.data;
        console.log({data})
        return(
            <div>
                <PageHeaderWrapper />
                <h3>အဖွဲ့၀င်စာရင်း</h3>
                <div>
                <Button className="btn"><Link to="/committee/create">ထည့်ရန်</Link></Button>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default Committee;