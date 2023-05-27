import React from "react";
import api from "../../apis";
import {Table,Button} from 'antd'
import {Link} from 'react-router-dom'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'

class Pagoda extends React.Component{
    
    constructor(){
        super();
        this.state ={
            data : []
        }
    }
    componentWillMount(){
        this.getAllPagoda();
    }
    componentDidMount(){
        this.getAllPagoda();
    }
    getAllPagoda(){
        api.get('pagoda').then(res=>this.setState({data : res.data}))
    }
    deletePagoda(id){
        api.delete(`pagoda/${id}`).then(()=>this.getAllPagoda());
        noti('success','ဖျက်ပြီးပါပြီ!')
    }
    
    render(){
        const columns =[
            {
                title : "အမည်",
                dataIndex : "pagoda_name",
                key : "pagoda_name"
            }, 
            // {
            //     title : "ဖော်ပြချက်",
            //     dataIndex : "description",
            //     key : "description"
            // },
            {
                title : "ဘုန်းကြီးကျောင်း",
                dataIndex : "monastery_name",
                key : "monastery_name"
            },
            
           
            {
                title : "လုပ်ဆောင်ချက်များ",
                dataIndex :"action",
                render : (text,record)=>{
                    return <span>
                        <Button className="btn"><Link to={`pagoda/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to={`pagoda/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;&nbsp;
                        <Button className="btn" onClick={()=>this.deletePagoda(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            }
        ]
        const {data} = this.state.data;
        console.log({data})

        
        return(
            <div>
                <PageHeaderWrapper />
                <h3>စေတီတော်များ</h3>
                <div>
                <Button className="btn"><Link to="/pagoda/create">ထည့်ရန်</Link></Button>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
export default Pagoda;