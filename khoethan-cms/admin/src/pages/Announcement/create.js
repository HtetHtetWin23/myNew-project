import React from "react"
import { Form,Input,Button,textArea, DatePicker} from "antd"
import { Link} from "react-router-dom"
import api from "../../apis";
import {noti,getUserInfo} from '../../utils'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import history from '../../router/history'



class AnnouncementCreate extends React.Component{
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
			api.post('announce',values);
			noti('success','အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ');
			history.push('/announce');

		}else{
			noti('error','မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
		}
		});
	};
    render(){
		const {getFieldDecorator} =this.props.form;
		const formItemLayout ={
			labelCol: {
				xs: { span : 24},
				sm: { span : 2},
			},
			wrapperCol: {
				xs: { span : 24},
				sm: { span : 18},
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
                <h3>ကြေညာချက်များထည့်ရန်</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                   <Form.Item label="အမည်">
                        {getFieldDecorator('title',{
							rules:[
								{
									required : true,
									message: 'Please input announcement'
								}
							]
						})(<Input  style={{width:'90%'}} placeholder="Enter announcement title"/>)}
                   </Form.Item>
				   <Form.Item label="ဖော်ပြချက်">
				       {getFieldDecorator ('description',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input description'
                            }
						   ]
					   })(<textArea cols="80" rows="2" placeholder="Enter announcement description"/>)}
				   
				   </Form.Item>
				   <Form.Item label="အနှစ်ချုပ်">
				       {getFieldDecorator ('summary',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input summary'
                            }
						   ]
					   })(<Input placeholder="Enter summary" style={{width:'90%'}}/>)}
				   
				   </Form.Item >
				   
				   <Form.Item {...tailFormItemLayout}>
				       <Button className="btn" htmlType="submit">သိမ်းရန်</Button>
					   <Button className="btn"><Link to="/announce">ဖျက်ရန်</Link></Button>
					   <Button type="danger" onClick={this.reset}>ရှင်းရန်</Button>
				   </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(AnnouncementCreate);