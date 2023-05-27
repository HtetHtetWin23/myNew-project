import React from 'react';
import {Form,Input,Button ,Radio,Row,Col,textarea} from 'antd';
import api from "../../apis"
import {noti,getUserInfo} from  '../../utils'
import { Link } from 'react-router-dom'
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper'
import history from '../../router/history'


const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 2 },
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

class PostCreate extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            type:"NEWS",
            data : [],
            img  : [],
            title_img : ''
        }
    }

    reset = () => {
        this.props.form.resetFields()
    }
    onTypeChange = e => {
        this.setState({
            type: e.target.value,
        })
    }
    addFileTitle = async (e)=>{
        this.getBase64(e.target.files[0],(result)=>this.setState({
            title_img:result
        }))
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
                let posts={...values}
                let userInfo=getUserInfo();
                posts.type=this.state.type
                posts.created_by=userInfo.user_name;
                posts.updated_by=""
                posts.title_image=this.state.title_img;
                posts.image=this.state.img
                api.post('post',posts)
                noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
                history.push('/post')
            }else{
                noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
       
            
            <div>
                <PageHeaderWrapper />
				<h3>သတင်းများထည့်ရန်</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="အမည်">
                    {getFieldDecorator('title', {
                        rules: [
                        {
                            required: true,
                            message: 'Please input post title',
                        },
                        ],
                    })(<Input placeholder="Enter title"/>)}
                    </Form.Item>
                    <Form.Item label="ဖော်ပြချက်">
                    {getFieldDecorator('description', {
                        rules: [
                        ],
                    })(<textarea cols="80" rows="2"  placeholder="Enter Description"/>)}
                    </Form.Item>
                    <Form.Item label="အနှစ်ချုပ်">
                    {getFieldDecorator('summary', {
                        rules: [
                        ],
                    })(<Input placeholder="Enter Summary"/>)}
                    </Form.Item>
                   
                    <Form.Item label="အမျိုးအစား">
                        <Radio.Group onChange={this.onTypeChange} value={this.state.type}>
                            <Radio value="NEWS">သတင်း</Radio>
                            <Radio value="ACTIVITY">လှုပ်ရှားမှုများ</Radio>
                        </Radio.Group>
                    </Form.Item>
                    
                    <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator("image", {
                        rules: [
                        {
                            required: true,
                            message: "Please upload your image"
                        }
                        ]
                    })(<input  type="file" name="image" multiple onChange={this.addFile}/>)}
                    </Form.Item>
                    <Form.Item label="ခေါင်းစဥ်ပုံထည့်ရန်">
                    {getFieldDecorator("title_image", {
                        rules: [
                        {
                            required: true,
                            message: "Please upload your image"
                        }
                        ]
                    })(<input type="file" name="image"  onChange={this.addFileTitle}/>)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        
                        <Button className="btn" htmlType="submit">သိမ်းရန်</Button>               
                        <Button className="btn"><Link to="/post">ဖျက်ရန်</Link></Button>
						<Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
                        
                    </Form.Item>
                </Form>
            </div>
       
        );
    }
}
export default Form.create()(PostCreate);