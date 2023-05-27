import React from 'react';
import {Form,Input,Button,Row,Col } from 'antd';
import api from "../../apis"
import {noti,getUserInfo} from  '../../utils'
import { Link } from 'react-router-dom'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import '../../App.css'
import history from '../../router/history'




const formItemLayout = {
    labelCol: {
      xs: { span: 15 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 20 },
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

class SchoolCreate extends React.Component {
    constructor(){
        super()
        this.state = {
            data : [],
            img  : []
        }
    }

    reset = () => {
        this.props.form.resetFields()
    }
    
   
    addFile = async(e) => {
        let images = []
        let base64images = []

        for(let i = 0; i < e.target.files.length; i++){
            images.push(e.target.files[i])
        }

        for(let i = 0; i < images.length; i++){
            await this.getBase64(images[i], result => base64images.push(result))
        }
        
        this.setState({
            img : base64images
        })
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
        this.props.form.validateFieldsAndScroll((err, values) => {

            if(!err){
                let school = { ...values};
                let userInfo=getUserInfo();

                school.created_by=userInfo.user_name;
                school.updated_by="";
                school.image=this.state.img;

                api.post('school',school)
                noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
               
                history.push('/school')
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
            {/* <h3>တည်ဆောက်ရန်</h3> */}
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
                    })(<Input placeholder="Enter position name" style={{ width: "85%" }}/>)}
                    </Form.Item>
                    <Form.Item label="ဖော်ပြချက်">
                    {getFieldDecorator('description', {
                        rules: [
                        ],
                    })(<textarea placeholder="Enter description" rows="2" style={{ width: "85%" }}/>)}
                    </Form.Item>
                    <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator("image", {
                        rules: [
                        {
                            required: true,
                            message: "Please upload your image"
                        }
                        ]
                    })(<input type="file" name="image"  multiple onChange={this.addFile} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                       
                        <Button className="btn" htmlType="submit">ထည့်ရန်</Button>
                        <Button className="btn"><Link to="/school">ဖျက်ရန်</Link></Button>
						<Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>;
                    </Form.Item>
                </Form>
            </div>
        </div>
        );
    }
   
}
export default Form.create()(SchoolCreate);