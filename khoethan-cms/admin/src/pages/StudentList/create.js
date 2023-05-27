import React from "react"
import { Form,Input,Button,Row,Col} from "antd"
import { Link} from "react-router-dom"
import api from "../../apis";
import {noti,getUserInfo} from '../../utils'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import history from '../../router/history'


class StudentListCreate extends React.Component{
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
		console.log(values.total_student);
	
		console.log(values);

		if(!err){
			api.post('student',values);
			noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
			history.push('/studentList')

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
                <h3>တည်ဆောက်ရန်</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                   <Form.Item label="အတန်း">
                        {getFieldDecorator('grade',{
							rules:[
								{
									required : true,
									message: 'Please input grade name'
								}
							]
						})(<Input  style={{ width: "85%" }} placeholder="Enter grade name"/>)}
                   </Form.Item>
				   <Form.Item label="အတန်းပိုင်အမည်">
				       {getFieldDecorator ('teacher_name',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input grade name'
                            }
						   ]
					   })(<Input  style={{ width: "85%" }} placeholder="Enter teacher name"/>)}
				   
				   </Form.Item>
                   <Form.Item label="ကျောင်းသူ">
				       {getFieldDecorator ('school_girl',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input number of school girl'
                            }
						   ]
					   })(<Input  style={{ width: "85%" }} placeholder="Enter school girl"/>)}
				   
				   </Form.Item>
                   <Form.Item label="ကျောင်းသား">
				       {getFieldDecorator ('school_boy',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input number of school boy'
                            }
						   ]
					   })(<Input  style={{ width: "85%" }} placeholder="Enter school boy"/>)}
				   
				   </Form.Item>
                   <Form.Item label="စုစုပေါင်း">
				       {getFieldDecorator ('total_student',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input total student '
                            }
						   ]
					   })(<Input  style={{ width: "85%" }} placeholder="Enter total student"/>)}
				   
				   </Form.Item>
				   
				   <Form.Item {...tailFormItemLayout}>
				       <Button className="btn" htmlType="submit">ထည့်ရန်</Button>
					   <Button className="btn"><Link to="/studentList">ဖျက်ရန်</Link></Button>
					   <Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
				   </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(StudentListCreate);