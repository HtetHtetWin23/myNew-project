import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from 'react-router-dom'
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'


class ProductType extends React.Component{
    
    
    constructor(){
        super()
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllProductType();

    }
    componentDidMount(){
        this.getAllProductType();

    }
    getAllProductType(){
        api.get('product_type').then(res=>this.setState({data:res.data.data}))
    }
    deleteProductType(id){
        api.delete(`product_type/${id}`).then(()=>this.getAllProductType());
        noti('success','ဖျက်ပြီးပါပြီ!')

    }
    
    render(){
        const columns=[
            {
                title : "အမည်",
                dataIndex : 'product_type_name',
                key : 'product_type_name'
            },
            // {
            //     title : "ဖော်ပြချက်",
            //     dataIndex : 'description',
            //     key : 'description'
            // },
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        <Button className="btn"><Link to={`productType/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;
                        <Button className="btn"><Link to={`productType/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;
                        <Button className="btn" onClick={()=>this.deleteProductType(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        const data=this.state.data;
        console.log(data)
        return(
            <div>
                <PageHeaderWrapper />
                <h3>ကုန်ပစ္စည်းအမျိုးအစား</h3>
                <div>
                    <Button className="btn"><Link to="/productType/create">ထည့်ရန်</Link></Button>
                </div><br></br>
                <Table columns={columns} dataSource={this.state.data}/>
            </div>
        )
        
    }

}
export default ProductType;