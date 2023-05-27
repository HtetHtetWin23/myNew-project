import React from 'react'
import api from '../../apis'
import {Table,Button} from "antd"
import {Link} from 'react-router-dom'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'


class Product extends React.Component{
    
    
    constructor(){
        super();
        this.state ={
            data: []
        }
    }
    componentWillMount(){
        this.getAllProduct();

    }
    componentDidMount(){
        this.getAllProduct();

    }
    getAllProduct(){
        api.get('product').then(res=>this.setState({data:res.data.data}))
    }
    deleteProduct = (id) =>{
        api.delete(`product/${id}`).then(()=>this.getAllProduct());
        noti('success','ဖျက်ပြီးပါပြီ!')

    }
    
    render(){
        const columns=[
            {
                title : "အမည်",
                dataIndex : "product_name",
                key : "product_name"
            },
            // {
            //     title : "ဖော်ပြချက်",
            //     dataIndex : "description",
            //     key : "description"
            // },
            {
                title : "အမျိုးအစား",
                dataIndex : "product_type_name",
                key : "product_type_name",
                
            },
            
            {
                title : "လုပ်ဆောင်ချက်များ",
                key : "action",
                render : (text,record)=>{
                    return<span>
                        
                        <Button className="btn"><Link to={`product/${record.id}`}>ကြည့်ရန်</Link></Button>
                        <Button className="btn"><Link to={`product/update/${record.id}`}>ပြင်ရန်</Link></Button>
                        <Button className="btn" onClick={()=>this.deleteProduct(record.id)}>ဖျက်ရန်</Button>
                        
                    </span>
                }
            },
        ]
        const data=this.state.data;
        console.log(data)
        return(
            <div>
                <PageHeaderWrapper />
                <h3>ထွက်ကုန်ပစ္စည်းများ</h3>
               <div>
               <Button className="btn"><Link to="/product/create">ထည့်ရန်</Link></Button>
               </div>
                
                <Table columns={columns} dataSource={data}/>
            </div>
        )
        
    }

}
export default Product;