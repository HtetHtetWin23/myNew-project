import React from "react"
import {Form,Button,Input,Row,Col} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history';
import PageHeaderWrapper from 'components/PageHeaderWrapper';



// const apiUrl = "http://localhost:9991/"
class ProductTypeEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data :[]
        }
    }
    
   

    componentWillMount(){
        const id = this.props.match.params.id;
        this.getProductTypeById(id)
    }

    getProductTypeById(id){
        api.get(`product_type/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            product_type_name : this.state.data.product_type_name,
            description :this.state.data.description,
            created_by:this.state.data.created_by 

        }))
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            values = {...values}
            let userInfo=getUserInfo();
            values.updated_by=userInfo.user_name;
            if(!err){
                console.log(values);
                api.put(`product_type/${values.id}`,values);
                noti('success','ပြင်ပြီးပါပြီ');

                history.push('/productType')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        })
    }
    render(){
        console.log(this.state.data);
        const {getFieldDecorator} =this.props.form;
        const formItemLayout ={
            labelCol : {
                xs :{span : 24},
                sm : { span : 8}
            },
            wrapperCol :{
                xs : {span : 24},
                sm : {span : 8}
            },
        };
        const tailFormItemLayout ={
            wrapperCol : {
                xs :{
                    span:24,
                    offset : 0
                },
                sm : {
                    span :16,
                    offset : 8,
                },
            },
            
        }
        return(
            <div>
				<PageHeaderWrapper/>

                
               
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    
                    <Form.Item>
                        {getFieldDecorator ('id')(<Input type="hidden"/>)}
                    </Form.Item>
                  
                    <Form.Item label="အမည်">
                        {getFieldDecorator('product_type_name',{
                            rules :[
                              
                            ]
                        })(<Input style={{ width: "100%" }}/>)}
                    </Form.Item>
                   
                    <Form.Item label="ဖော်ပြချက်">
                        {getFieldDecorator('description',{
                            rules:[

                            ]
                        })(<textarea rows="2" cols="38"/>)}
                    </Form.Item> 
                    
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းမည်</Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to="/productType">မသိမ်းပါ</Link></Button>
                       
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(ProductTypeEdit);