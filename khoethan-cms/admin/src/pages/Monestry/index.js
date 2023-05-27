import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from "react-router-dom"
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'

class Monestry extends React.Component{
    
    
    constructor(){
        super();
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllMonestry();

    }
    componentDidMount(){
        this.getAllMonestry();

    }
    getAllMonestry(){
        api.get('monestry').then(res=>this.setState({data:res.data}))
    }
    deleteMonestry(id){
        api.delete(`monestry/${id}`).then(()=>this.getAllMonestry());
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
                title : "ကျောင်းထိုင်ဆရာတော်",
                dataIndex : "abbot",
                key : "abbot"
            },
            // {
            //     title : "သံဃာတော်အရေအတွက်",
            //     dataIndex : "number_of_monk",
            //     key : "number_of_monk"
            // },
            // {
            //     title : "ဘုရားပွဲကျင်းပသည့်ရက်",
            //     dataIndex : "festival_date",
            //     key : "festival_date"
            // },
            // {
            //     title : "ဖော်ပြချက်များ",
            //     dataIndex : "description",
            //     key : "description"
            // },
            // {
            //     title : "ဖုန်းနံပါတ်",
            //     dataIndex : "phone_no",
            //     key : "phone_no"
            // },
           
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        <Button className="btn"><Link to={`monestry/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;
                        <Button className="btn" ><Link to={`monestry/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;
                        <Button className="btn" onClick={()=>this.deleteMonestry(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        const {data}=this.state.data;
        console.log({data})
        return(
            <div>
                <PageHeaderWrapper/>
                <h3>ဘုန်းကြီးကျောင်းများ</h3>
                <div>
                    <Button className="btn"><Link to="/monestry/create">ထည့်ရန်</Link></Button>
                </div>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
        
    }

}
export default Monestry;