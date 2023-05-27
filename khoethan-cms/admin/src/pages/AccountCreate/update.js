import React from 'react';
import {Form,Input,Button,Row, Col, Card} from 'antd';
import api from "../../apis"
import {noti} from  '../../utils'
import { Link } from 'react-router-dom'
import history from '../../router/history'
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
};

class AccountEdit extends React.Component {
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    componentWillMount(){
        let id = this.props.match.params.id;
        this.getUsersById(id)
    }

    getUsersById = (id) => {
        api.get(`/users/${id}`).then(res => this.setState({loading:false,data : res.data.data})).then(() =>  this.props.form.setFieldsValue({
            id:this.state.data.id,
            user_name:this.state.data.user_name,
            nric:this.state.data.nric,
            phone_no:this.state.data.phone_no,
            email:this.state.data.email,
            created_by:this.state.data.created_by,
        }))
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            values = {...values, created_by : "Admin", updated_by : "Admin" }
            console.log("vv",values)
            if(!err){
                api.put(`users/${values.id}`,values)
                noti('success', 'ဝမ်းသာပါတယ်!', 'အကောင့်အချက်အလက်ကိုပြင်ဆင်ပြီးပါပြီ')
                history.push('/accountcreate')
            }else{
                noti('error', 'ဝမ်းနည်းပါတယ်!', 'အကောင့်အချက်အလက်ကိုပြင်ဆင်တာအဆင်မပြေပါ')
            }
        });
    };

    compareToFirstPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && value !== form.getFieldValue("password_hash")) {
			callback("စကားဝှက်ကိုတူအောင်ထည့်ပါ!");
		} else {
			callback();
		}
	};

	validateToNextPassword = (rule, value, callback) => {
		const form = this.props.form;
		if (value && this.state.confirmDirty) {
			form.validateFields(["confirm"], { force: true });
		}
		callback();
	};

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div>
			<PageHeaderWrapper />
					<Card>
						<Form {...formItemLayout} onSubmit={this.handleSubmit}>
							<br />
							<Row>
								<div
									style={{
										position: "absolute",
										top: "-20px",
										fontSize: 21,
										fontWeight: 500,
										color: "#000"
									}}
								>
									အကောင့်အချက်အလက်ကိုပြင်ဆင်ခြင်း
							</div>
							</Row>
							<br />

							<Row>
								<Form.Item>
								{getFieldDecorator('id')(<Input type="hidden"/>)}
								</Form.Item>
								<Col sm={24} md={12}>
									<FormItem label="အသုံးပြုသူအမည်">
										{getFieldDecorator("user_name", {
											rules: [
												{
													required: true,
													message: "အသုံးပြုသူအမည်ထည့်ရန်ကျန်သေးသည်"
												}
											]
										})(
											<Input 
												style={{ width: "85%" }}
												placeholder="အသုံးပြုသူအမည်ထည့်ရန်"
											/>
										)}
									</FormItem>
								</Col>

								<Col sm={24} md={12}>
									<FormItem label="မှတ်ပုံတင်နံပါတ်">
										{getFieldDecorator("nric", {
											rules: [
												{
													required: true,
													message: "မှတ်ပုံတင်နံပါတ်ထည့်ရန်ကျန်သေးသည်"
												}
											]
										})(
											<Input 
												style={{ width: "85%" }}
												placeholder="၅/အရတ(နိုင်)၁၂၃၄၅၆"
											/>
										)}
									</FormItem>
								</Col>
							</Row>

							<Row>
								<Col sm={24} md={12}>
									<FormItem label="ဖုန်းနံပါတ်">
										{getFieldDecorator("phone_no", {
											rules: [
												{
													required: true,
													message: "ဖုန်းနံပါတ်ထည့်ရန်ကျန်သေးသည်"
												}
											]
										})(
											<Input 
												style={{ width: "85%" }}
												placeholder="ဖုန်းနံပါတ်ထည့်ရန်"
											/>
										)}
									</FormItem>
								</Col>
								<Col sm={24} md={12}>
									<FormItem label="အီးမေးလ်(Email)">
										{getFieldDecorator("email", {
											rules: [
												{
													type: "email",
													message: "အီးမေးလ်(Email)ပုံစံမမှန်ပါ!"
												},
												{
													required: true,
													message: "အီးမေးလ်(Email)ထည့်ရန်ကျန်သေးသည်"
												}
											]
										})(
											<Input  style={{ width: "85%" }} placeholder="အီးမေးလ်(Email)ထည့်ရန်" />
										)}
									</FormItem>
								</Col>
							</Row>

							<Row>
								<Col sm={24} md={12}>
									<FormItem label="စကားဝှက်">
										{getFieldDecorator("password_hash", {
											rules: [
												{
													required: true,
													message: "စကားဝှက်ထည့်ရန်ကျန်သေးသည်"
												},
												{
													validator: this.validateToNextPassword
												}
											]
										})(
											<Input.Password
												style={{ width: "85%" }}
												type="password"
												placeholder="စကားဝှက်ထည့်ရန်"
												minLength="6"
											/>
										)}
									</FormItem>
								</Col>

								<Col sm={24} md={12}>
									<FormItem label="စကားဝှက်အတည်ပြုရန်">
										{getFieldDecorator("confirm", {
											rules: [
												{
													required: true,
													message: "အတည်ပြုရန်စကားဝှက်ကိုထည့်ပါ!"
												},
												{
													validator: this.compareToFirstPassword
												}
											]
										})(
											<Input.Password
												style={{ width: "85%" }}
												type="password"
												placeholder="အတည်ပြုစကားဝှက်ထည့်ပါ"
												onBlur={this.handleConfirmBlur}
												minLength={6}
											/>
										)}
									</FormItem>
								</Col>
							</Row>		

							<FormItem {...tailFormItemLayout}>
								<Button
									className="button1 button11"
                                    htmlType="submit"
								>
									သိမ်းရန်
							</Button>
								<Button className="button2 button22" >
									<Link to="/accountcreate">မလုပ်တော့ပါ</Link>
								</Button>
							</FormItem>
						</Form>
					</Card>
        </div>
        );
    }
}
export default Form.create()(AccountEdit);