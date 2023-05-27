import React from 'react';
import { Form, Input, Button} from 'antd'
import './style.css'
import api from '../../apis'
import {noti} from  '../../utils'


const { TextArea } = Input;


class Contact extends React.Component {

  constructor(){
    super()
    this.state = {
        data : [],
        
    }
}

reset = () => {
    this.props.form.resetFields()
}


handleSubmit = async(e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
        values = {...values, created_by : "Admin", updated_by : "Admin" }
        console.log(values)
        if(!err){
            api.post('contact',values)
            noti('success', 'Successfully!', 'Commitee has been created successfully.')
            
        }else{
          noti('error', 'Fail!', 'Commitee not created.')
          
            
        }
    });
};

render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div className="body">
            
            <h1 class="tophead">ဆက်သွယ်ရန်လိပ်စာ</h1>
            <p className="pag1">ဤဝက်ဘ်ဆိုက်ကို အသုံးပြုရသည်မှာ အဆင်မပြေမှုတစ်စုံတစ်ရာရှိခဲ့လျှင် အောက်ပါဖောင်အား ဖြည့်၍ ကျွန်တော်တို့အသင်းအား ဆက်သွယ်နိုင်ပါသည်။ </p>
            <div class="contact">
                <div class="subcontact2">
                    
                    <Form style={{background : '#B4C7D6' }} onSubmit={this.handleSubmit}>
                        <div class="row">
                            <div class="col-25">
                                <Form.Item label="အမည်"></Form.Item>
                            </div>
                            <div class="col-75">
                                    {getFieldDecorator('name', {
                                        rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input commitee name',
                                                },
                                        ],
                                    })(<Input />)}
                            </div>
                        </div><br></br>              
                        <div class="row">
                            <div class="col-25">
                                <Form.Item label="အီးမေးလ်"></Form.Item>
                            </div>
                            <div class="col-75">
                                {getFieldDecorator('email', {
                                    rules: [
                                        {
                                        required: true,
                                        message: 'Please input commitee name',
                                        },
                                    ],
                                })(<Input />)}
                            </div>
                        </div><br></br>
                        <div class="row">
                            <div class="col-25">
                                <Form.Item label="ဖုန်းနံပါတ်"></Form.Item>
                            </div>
                            <div class="col-75">
                                {getFieldDecorator('phone_no', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input phone no',
                                        },
                                    ],
                                })(<Input />)}
                            </div>
                        </div><br></br>
                        <div class="row">
                            <div class="col-25">
                                <Form.Item label="အကြောင်းအရာ"></Form.Item>
                            </div>
                            <div class="col-75">
                                {getFieldDecorator('description', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input description',
                                        },
                                    ],
                                })(<Input />)}
                            </div>
                        </div><br></br>
                        <div class="row">
                            <div class="col-25">
                                <Form.Item label="စာကိုယ်"></Form.Item>
                            </div>
                            <div class="col-75">
                                {getFieldDecorator('subject', {
                                    rules: [
                                        {
                                            required: true,
                                            message: 'Please input subject',
                                        },
                                    ],
                            })(<TextArea rows="4" cols="100"/>)}
                            </div>
                        </div>
                        <div className="action">
                        <Button htmlType="submit" className="click">ပို့မည်</Button>&nbsp;&nbsp;&nbsp;
                        <Button onClick={this.reset} className="click">မပို့ပါ</Button>&nbsp;
                        </div><br></br><br></br>
                    </Form>
                </div>
            </div>
        </div>
        )
    }
}

export default Form.create()(Contact)