import React from "react"
import { Form,Input,Button,Select,Row,Col} from "antd"
import { Link} from "react-router-dom"
import api from "../../apis";
import {noti,getUserInfo} from '../../utils'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import '../../App.css'
import history from '../../router/history'
const { Option } = Select;

class CommitteeCreate extends React.Component{
	constructor(){
		super();
		this.state={
			data : [],
			img : '',
			position: [],
			positionSelect:''

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
	addFile = (e) => {
        this.getBase64( e.target.files[0], (result) => this.setState({
           img : result
        }))
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
	handleSubmit = async(e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err,values)=>{
			let committee = { ...values,updated_by:"" }
			let userInfo=getUserInfo();
			
			committee.created_by = userInfo.user_name;
			committee.position_id = this.state.positionSelect;
			committee.image = this.state.img;
				// committee.phone_no=this.state.phone_no;
		

		if(!err){
			let committee = { ...values }
			let userInfo=getUserInfo();
				committee.created_by =userInfo.user_name;
				committee.updated_by = "";
				committee.position_id = this.state.positionSelect;
				committee.image = this.state.img;
				// committee.phone_no=this.state.phone_no;

			api.post('committee', committee).then((result) => console.log(result))
			noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
			history.push('/committee')

		}else{
			noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
		}
		});
	};
    render(){
		const {getFieldDecorator} =this.props.form;
		const result = this.state.position.map((item) => {
			return <Option value={item.id}>{item.name}</Option>
		})
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
				<PageHeaderWrapper />
                <h3>တည်ဆောက်ရန်</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                   <Form.Item label="အမည်">
                        {getFieldDecorator('name',{
							rules:[
								{
									required : true,
									message: 'Please input committee name'
								}
							]
						})(<Input placeholder="Enter member name"/>)}
                   </Form.Item>
				   <Form.Item label="ဖော်ပြချက်">
				       {getFieldDecorator ('description',{
						   rules :[
							   
						   ]
					   })(<Input placeholder="Enter description"/>)}
				   
				   </Form.Item>
				   <Form.Item label="ဖုန်းနံပါတ်">
				       {getFieldDecorator ('phone_no',{
						   rules :[
							   
						   ]
					   })(<Input placeholder="Enter phone number "/>)}
				   
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
								style={{ width: "97%" }}
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
				   <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator('image', {
                        rules: [
                        {
                            required: true,
                            message: "Please upload your image"
                        }
                        ]
                    })(<input  type="file" name="image" onChange={this.addFile} />)}
                    </Form.Item>
				   <Form.Item {...tailFormItemLayout}>
				       <Button className="btn" htmlType="submit">ထည့်ရန်</Button>&nbsp;&nbsp;
					   <Button className="btn"><Link to="/committee">ဖျက်ရန်</Link></Button>&nbsp;&nbsp;
					   <Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
				   </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(CommitteeCreate);