import React from 'react';
import {Form,Input,Button ,Row,Col} from 'antd';
import api from "../../apis"
import {noti,getUserInfo} from  '../../utils'
import { Link } from 'react-router-dom'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';

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

class PositionEdit extends React.Component {
    constructor(){
        super()
        this.state = {
            data : [],
           
        }
    }

    componentWillMount(){
        let id = this.props.match.params.id;
        this.getPositionById(id)
    }

    getPositionById = (id) => {
        api.get(`/position/${id}`).then(res => this.setState({data : res.data.data})).then(() =>  this.props.form.setFieldsValue({
            id : this.state.data.id,
            name: this.state.data.name,
            description : this.state.data.description,
            created_by:this.state.data.created_by
        }))
    }
   

    handleSubmit = async(e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            values = {...values }
            let userInfo=getUserInfo();
            values.updated_by=userInfo.user_name;
            if(!err){
                api.put(`position/${values.id}`,values)
                noti('success','ပြင်ပြီးပါပြီ');
                history.push('/position')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <div>
            <PageHeaderWrapper/>
           
            <div>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                    {getFieldDecorator('id')(<Input type="hidden"/>)}
                    </Form.Item>
                    <Form.Item label="အမည်">
                    {getFieldDecorator('name', {
                        rules: [
                       
                        ],
                    })(<Input />)}
                    </Form.Item>
                    <Form.Item label="ဖော်ပြချက်">
                    {getFieldDecorator('description', {
                        rules: [
                        ],
                    })(<Input />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">
                            သိမ်းမည်
                        </Button>
                        <Button className="btn">
                            <Link to="/position">မသိမ်းပါ</Link>
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
        );
    }
}
export default Form.create()(PositionEdit);