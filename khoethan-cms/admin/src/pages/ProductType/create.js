import React from "react"
import { Form,Input,Button,Row,Col } from "antd"
import { Link} from "react-router-dom"
import api from "../../apis";
import {noti,getUserInfo} from '../../utils'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import history from '../../router/history'


class ProductTypeCreate extends React.Component{
	constructor(){
		super();
		this.state={
			data : []
			
		}
	}
	reset = ()=>{
		this.props.form.resetFields();
	}
	  
	
	handleSubmit = async(e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err,values)=>{
		values = {...values,updated_by : ""};
		let userInfo=getUserInfo();
		values.created_by=userInfo.user_name;
	
		console.log(values);

		if(!err){
			api.post('product_type',values);
			noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
			history.push('/productType')


		}else{
			noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
		}
		});
	};
    render(){
		const {getFieldDecorator} =this.props.form;
		const formItemLayout ={
			labelCol: {
				xs: { span : 24},
				sm: { span : 8},
			},
			wrapperCol: {
				xs: { span : 24},
				sm: { span : 8},
			}
		};
		const tailFormItemLayout = {
			wrapperCol : {
				xs: {
					span : 24,
					offset: 0,
				},
				sm: {
					span : 16,
					offset : 8,
				},
			},
		};
        return(
            <div>
				<PageHeaderWrapper/>
                <h3>ထွက်ကုန်ပစ္စည်းအမျိုးအစားများထည့်ရန်</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
			
				   <Form.Item label="အမည်">
                        {getFieldDecorator('product_type_name',{
							rules:[
								{
									required : true,
									message: 'Please input prouduct type name'
								}
							]
						})(<Input />)}
                   </Form.Item>
						
				   <Form.Item label="ဖော်ပြချက်">
				       {getFieldDecorator ('description',{
						   rules :[]
				   
				})(<textArea placeholder="Enter description" rows="2" cols="38"/>)}
				   
				   </Form.Item>
				   <Form.Item {...tailFormItemLayout}>
				       <Button className="btn" htmlType="submit">ထည့်မည်</Button>
					   <Button className="btn"><Link to="/productType">ဖျက်မည်</Link></Button>
					   <Button className="btn" onClick={this.reset}>ပြန်စမည်</Button>
				   </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(ProductTypeCreate);