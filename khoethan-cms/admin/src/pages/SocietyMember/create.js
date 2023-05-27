import React from "react"
import { Form,Input,Button,Select,Row,Col} from "antd"
import { Link} from "react-router-dom"
import api from "../../apis";
import {noti,getUserInfo} from '../../utils'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import history from '../../router/history'
const { Option } = Select;

class SocietyMemberCreate extends React.Component{
	constructor(){
		super();
		this.state={
			data : [],
			position: [],
			positionSelect : ''
			
		}
	}

	componentWillMount() {
		this.getAllPosition();
	};

	getAllPosition = () => {
		api.get('position').then(result => this.setState({
			position: result.data.data
		}))
	};
	onSelectChange = (value) => {
		this.setState({
			positionSelect: value
		});
	};
	

	reset = ()=>{
		this.props.form.resetFields();
	}
	  
	
	handleSubmit = async(e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err,values)=>{
		let member = {...values,updated_by : ""};
		let userInfo=getUserInfo();
		member.created_by=userInfo.user_name;
		member.position_id = this.state.positionSelect;
	

		if(!err){
			api.post('society_member',member);
			noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
			
			history.push('/societyMember')

		}else{
			noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
		}
		});
	};
    render(){
		const result = this.state.position.map((item) => {
			return <Option value={item.id}>{item.name}</Option>
		})
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
                   <Form.Item label="အမည်">
                        {getFieldDecorator('name',{
							rules:[
								{
									required : true,
									message: 'Please input member name'
								}
							]
						})(<Input placeholder="Enter member name" style={{ width: "90%" }}/>)}
                   </Form.Item>
				   <Form.Item label="ရာထူး">
						{getFieldDecorator('position_id', {
							rules: [
								{
									required: true,
									message: 'please choose the position name'
								}],
						})(
							<Select
								showSearch
								style={{ width: "90%" }}
								placeholder="Select position name"
								optionFilterProp="children"
								onChange={this.onSelectChange}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase())
								}
							>
								{result}
							</Select>
							

						)}
					</Form.Item>
                   <Form.Item label="ဖော်ပြချက်">
				       {getFieldDecorator ('description',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input description'
                            }
						   ]
					   })(<textArea  style={{ width: "90%" }} rows="2" cols="70" placeholder="Enter description"/>)}
				   
				   </Form.Item>
                   <Form.Item label="ဖုန်းနံပါတ်">
				       {getFieldDecorator ('phone_no',{
						   rules :[
                            {
                                required : true,
                                message: 'Please input phone number'
                            }
						   ]
					   })(<Input  style={{ width: "90%" }} placeholder="Enter phone-no"/>)}
				   
				   </Form.Item>
                   
				   
				   <Form.Item {...tailFormItemLayout}>
				       <Button className="btn" htmlType="submit">ထည့်ရန်</Button>
					   <Button className="btn"><Link to="/societyMember">ဖျက်ရန်</Link></Button>
					   <Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
				   </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(SocietyMemberCreate);