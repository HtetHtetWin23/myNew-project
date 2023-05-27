import React from "react"
import { Form,Input,Button,Select,Row,Col,textArea} from "antd"
import { Link} from "react-router-dom"
import api from "../../apis";
import {noti,getUserInfo} from '../../utils'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import '../../App.css'
import history from '../../router/history'
const { Option } = Select;



class FestivalCreate extends React.Component{
	constructor(){
		super();
		this.state={
			// data : [],
			img : [],
			

		}
	}
	
	// componentWillMount() {
	// 	this.getAllFestival();
	// };

	// getAllFestival = () => {
	// 	api.get('festival').then(result => this.setState({
	// 		data: result.data.data
	// 	}))
	// };
	
	
	reset = ()=>{
		this.props.form.resetFields();
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
		this.props.form.validateFieldsAndScroll((err,values)=>{
			let festival = { ...values }
			let userInfo=getUserInfo();
				festival.created_by =userInfo.user_name;
				festival.updated_by = "";
				festival.image = this.state.img;
				
		

		if(!err){

				api.post('festival', festival).then((result) => console.log(result))
				noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
			history.push('/festival')

		}else{
			noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
		}
		});
	};
    render(){
		
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
				<PageHeaderWrapper />
                
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                   <Form.Item label="အမည်">
                        {getFieldDecorator('title',{
							rules:[
								{
									required : true,
									message: 'Please input festival name'
								}
							]
						})(<Input placeholder="Enter festival name" />)}
                   </Form.Item>
				   <Form.Item label="ဖော်ပြချက်">
				       {getFieldDecorator ('description',{
						   rules :[
							{
								required : true,
								message : 'Please input description'
							}
						   ]
					   })(<Input placeholder="Enter description" />)}
				   
				   </Form.Item>
				   <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator('image', {
                        rules: [
                        {
                            required: true,
                            message: "Please upload your image"
                        }
                        ]
                    })(<input type="file" name="image" multiple onChange={this.addFile} />)}
                    </Form.Item>
					
				   <Form.Item {...tailFormItemLayout}>
				       <Button className="btn" htmlType="submit">ထည့်ရန်</Button>&nbsp;&nbsp;
					   <Button className="btn"><Link to="/festival">ဖျက်ရန်</Link></Button>&nbsp;&nbsp;
					   <Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
				   </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(FestivalCreate);