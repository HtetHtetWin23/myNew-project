import React from 'react';
import {Form,Input,Button,Row,Col } from 'antd';
import api from "../../apis"
import {noti,getUserInfo} from  '../../utils'
import { Link } from 'react-router-dom'
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import history from '../../router/history'

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
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

class PositionCreate extends React.Component {
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
            values = {...values, updated_by : "" }
            let userInfo=getUserInfo();
            values.created_by=userInfo.user_name;
            if(!err){
                api.post('position',values)
                noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
                history.push('/position')
            }else{
                noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div>
            <PageHeaderWrapper/>
            <h3>တည်ဆောက်ရန်</h3>
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="အမည်">
                    {getFieldDecorator('name', {
                        rules: [
                        {
                            required: true,
                            message: 'Please input position name',
                        },
                        ],
                    })(<Input 
                        style={{ width: "85%" }}
                        placeholder="Enter Position Name"/>)}
                    </Form.Item>
                    <Form.Item label="ဖော်ပြချက်">
                    {getFieldDecorator('description', {
                        rules: [
                        ],
                    })(<Input  style={{ width: "85%" }}
                    placeholder="Enter Description"/>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">ထည့်ရန်</Button>
                        <Button className="btn"><Link to="/position">ဖျက်ရန်</Link></Button>
                        <Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
                    </Form.Item>
                    
                </Form>
            </div>
        </div>
        );
    }
}
export default Form.create()(PositionCreate);