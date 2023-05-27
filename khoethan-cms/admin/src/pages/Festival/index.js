import React from "react";
import api from "../../apis";
import {Table,Button} from 'antd'
import {Link} from 'react-router-dom'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'

class Festival extends React.Component{
    
    constructor(){
        super();
        this.state ={
            data : []
        }
    }
    componentWillMount(){
        this.getAllFestival();
    }
    componentDidMount(){
        this.getAllFestival();
    }
    getAllFestival(){
        api.get('festival').then(res=>this.setState({data : res.data}))
    }
    deleteFestival(id){
        api.delete(`festival/${id}`).then(()=>this.getAllFestival());
        noti('success','ဖျက်ပြီးပါပြီ!')
    }
    
    render(){
        const columns =[
            {
                title : "အမည်",
                dataIndex : "title",
                key : "title"
            }, 
            {
                title : "ဖော်ပြချက်",
                dataIndex : "description",
                key : "description"
            },
            
           
            {
                title : "လုပ်ဆောင်ချက်များ",
                dataIndex :"action",
                render : (text,record)=>{
                    return <span>
                        <Button className="btn"><Link to={`festival/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to={`festival/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn" onClick={()=>this.deleteFestival(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            }
        ]
        const {data} = this.state.data;
        console.log({data})

        
        return(
            <div>
                <PageHeaderWrapper />
                <h3>ပွဲတော်များ</h3>
                <div>
                <Button className="btn"><Link to="/festival/create">ထည့်ရန်</Link></Button>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default Festival;