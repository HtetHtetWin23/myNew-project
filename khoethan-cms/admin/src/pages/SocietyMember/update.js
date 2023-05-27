import React from "react"
import {Form,Button,Input,Select,Col,Row} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
const {Option} =Select


class SocietyMemberEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data :[],
            positionSelect : '',
            position: []
        }
    }
    
   

    componentWillMount(){
        const id = this.props.match.params.id;
        this.getAllSocietyMemberById(id);
        this.getAllPosition();
    }
    getAllPosition = () => {
		api.get('position').then(result => this.setState({
			position: result.data.data
		}))
    };
    getAllSocietyMemberById(id){
        api.get(`society_member/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            name : this.state.data.name,
            position_id : this.state.data.position_id,
            description : this.state.data.description,
            phone_no : this.state.data.phone_no,
            created_by:this.state.data.created_by

        }))
    }
    onSelectChange = (value) => {
		this.setState({
			positionSelect: value
		});
    };
    handleSubmit = e=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            values = {...values}
            let userInfo=getUserInfo();
            values.updated_by=userInfo.user_name;
            if(!err){
                console.log(values);
                api.put(`society_member/${values.id}`,values);
                noti('success','ပြင်ပြီးပါပြီ');

                history.push('/societyMember')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        })
    }
    render(){
        const result = this.state.position.map((item) => {
			return <Option value={item.id}>{item.name}</Option>
		})
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

                <h3>ပြင်ဆင်ချက်များ</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator ('id')(<Input type="hidden"/>)}
                    </Form.Item>
                    <Form.Item label="အမည်">
                        {getFieldDecorator('name',{
							rules:[
								
							]
						})(<Input/>)}
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
								style={{ width: "85%" }}
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
                           
						   ]
					   })(<Input  style={{ width: "85%" }} placeholder="Enter description"/>)}
				   
				   </Form.Item>
                   <Form.Item label="ဖုန်းနံပါတ်">
				       {getFieldDecorator ('phone_no',{
						   rules :[
                            
						   ]
					   })(<Input  style={{ width: "85%" }} placeholder="Enter phone-no"/>)}
				   
				   </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းမည်</Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to="/societyMember">မသိမ်းပါ</Link></Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(SocietyMemberEdit);