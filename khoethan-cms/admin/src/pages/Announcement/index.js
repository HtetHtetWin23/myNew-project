import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from 'react-router-dom'
import '../../App.css'
import {noti} from '../../utils'
import PageHeaderWrapper from 'components/PageHeaderWrapper';

class Announcement extends React.Component{
    
    
    constructor(){
        super()
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllAnnouncement();

    }
    componentDidMount(){
        this.getAllAnnouncement();
    }
    getAllAnnouncement(){
        api.get('announce').then(res=>this.setState({data:res.data.data}))
    }
    deleteAnnouncement(id){
        api.delete(`announce/${id}`).then(()=>this.getAllAnnouncement());
        noti('success','ဖျက်ပြီးပါပြီ!')
    }
    
    render(){
        const columns=[
            {
                title : "အမည်",
                dataIndex : 'title',
                key : 'title'
            },
            // {
            //     title : "ဖော်ပြချက်",
            //     dataIndex : 'description',
            //     key : 'description'
            // },
            {
                title : "အနှစ်ချုပ်",
                dataIndex : 'summary',
                key : 'summary'
            },
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        <Button className="btn"><Link to={`announce/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;
                        <Button className="btn"><Link to={`announce/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;
                        <Button className="btn" onClick={()=>this.deleteAnnouncement(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        const data=this.state.data;
        console.log(data)
        return(
            <div>
                <PageHeaderWrapper />
                <h3>ကြေညာချက်များ</h3>
                <div>
                    <Button className="btn"><Link to="/announce/create">ထည့်ရန်</Link></Button>
                </div><br></br>
                <Table columns={columns} dataSource={this.state.data}/>
            </div>
        )
        
    }

}
export default Announcement;