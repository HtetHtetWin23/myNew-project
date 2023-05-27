import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from 'react-router-dom'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'

class Post extends React.Component{
    
    
    constructor(){
        super();
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllPost();

    }
    componentDidMount(){
        this.getAllPost();

    }
    getAllPost(){
        api.get('post').then(res=>this.setState({data:res.data.data}))
    }
    deletePost = (id)=>{
        api.delete(`post/${id}`).then(()=>this.getAllPost());
        noti('success','ဖျက်ပြီးပါပြီ!')

    }
    
    render(){
        
        const columns=[
            {
                title : "အမည်",
                dataIndex : "title",
                key : "title"
            },
            {
                title : "အနှစ်ချုပ်",
                dataIndex : "summary",
                key : "summary"
            },
            
            // {
            //     title : "အမျိုးအစား",
            //     dataIndex : "type",
            //     key : "type"
            // },
            
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        <Button className="btn"><Link to={`post/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;
                        <Button className="btn"><Link to={`post/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;
                        <Button className="btn" onClick={()=>this.deletePost(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
       
        const data=this.state.data;
        console.log(data)
        return(
            <div>
                <PageHeaderWrapper/>
                <h3>သတင်းများ</h3>
                <div>
                    <Button className="btn"><Link to="/post/create">ထည့်ရန်</Link></Button>
                </div><br></br>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
        
    }

}
export default Post;