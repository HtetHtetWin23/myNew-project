import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from 'react-router-dom'
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'


class SocietyMember extends React.Component{
    
    
    constructor(){
        super()
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllSocietyMember();

    }
    componentDidMount(){
        this.getAllSocietyMember();

    }
    getAllSocietyMember(){
        api.get('society_member').then(res=>this.setState({data:res.data.data}))
    }
    deleteSocietyMember(id){
        api.delete(`society_member/${id}`).then(()=>this.getAllSocietyMember());
        noti('success','ဖျက်ပြီးပါပြီ!')

    }
    
    render(){
        const columns=[
            {
                title : "အမည်",
                dataIndex : 'name',
                key : 'name'
            },
            {
                title : "ရာထူး",
                dataIndex : 'position_name',
                key : 'position_name'
            },
            ,
            // {
            //     title : "ဖော်ပြချက်",
            //     dataIndex : 'description',
            //     key : 'description'
            // },
            // ,
            // {
            //     title : "ဖုန်းနံပါတ်",
            //     dataIndex : 'phone_no',
            //     key : 'phone_no'
            // },           
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        <Button className="btn"><Link to={`societyMember/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;
                        <Button className="btn"><Link to={`societyMember/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;
                        <Button className="btn" onClick={()=>this.deleteSocietyMember(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        // const data=this.state.data;
        // console.log(data)
        return(
            <div>
                <PageHeaderWrapper />
                <h3>အဖွဲ့၀င်များ</h3>
                <div>
                    <Button className="btn"><Link to="/societyMember/create">ထည့်ရန်</Link></Button>
                </div><br></br>
                <Table columns={columns} dataSource={this.state.data}/>
            </div>
        )
        
    }

}
export default SocietyMember;