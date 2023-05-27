import React from "react";
import {Button,Form,Input,textarea} from "antd"
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
// import { DatePicker } from 'antd';


const formItemLayout={
	labelCol:{
		xs: { span : 15},
		sm: { span :4}
	},
	wrapperCol:{
		xs: { span : 15},
		sm: { spand : 16}
	}
};
const tailFormItemLayout ={
	wrapperCol : {
		xs:{
			span : 24,
			offset : 0
		},
		sm : {
			span : 16,
			offset : 8
		},
	},
}

class MonestryCreate extends React.Component{
	constructor(){
		super();
		this.state={
			data: [],
			img :[]
		}
	}
	reset=()=>{
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
   
      
	handleSubmit = async(e)=>{
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err,values)=>{
	
			if(!err){
                let monestry={...values};
                let userInfo=getUserInfo();
				monestry.created_by=userInfo.user_name;
				monestry.updated_by="";
				

                monestry.image=this.state.img;
                console.log(monestry.image)
				api.post('monestry',monestry);
                noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
                history.push('/monestry')
			}else{
				noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
			}
		})
	}
    render(){
		const {getFieldDecorator}=this.props.form;
		
        return(
            <div>
				<PageHeaderWrapper/>
                <h3>တည်ဆောက်ရန်</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="အမည်">
					    {getFieldDecorator('name',{
							rules:[
								{
									required:true,
									message:'Please input monestry name'
								}
							]
						})(<Input placeholder="Enter monastery name"/>)}
                    </Form.Item>
					<Form.Item label="ကျောင်းထိုင်ဆရာတော်">
                        {getFieldDecorator ('abbot',{
                            rules:[
                                {
                                    required : true,
                                    message : 'Please input abbot name'
                                }
                            ]
                        })(<Input placeholder="Enter abbot name"/>)}
                    </Form.Item>
                    <Form.Item label="သံဃာတော်များ">
                        {getFieldDecorator ('number_of_monk',{
                            rules:[
                                {
                                    required : true,
                                    message : 'Please input number of monk'
                                }
                            ]
                        })(<Input placeholder="Enter number of monk"/>)}
                    </Form.Item>
                    <Form.Item label="ဘုရားပွဲကျင်းပသည့်ရက်">
                        {getFieldDecorator ('festival_date',{
                            rules:[
                                {
                                    required : true,
                                    message : 'Please input festival date'
                                }
                            ]
                        })(
                           <Input placeholder="Enter festival date"/>
                        )}
                    </Form.Item>
					<Form.Item label="ဖော်ပြချက်">
					    {getFieldDecorator('description',{
							rules:[
                                {
                                    required : true,
                                    message : 'Please input description'
                                }
							]
						})(<textarea cols="75" rows="2" />)}
					</Form.Item>
                    <Form.Item label="ဖုန်းနံပါတ်">
					    {getFieldDecorator('phone_no',{
							rules:[
                                {
                                    required : true,
                                    message : 'Please input phone_no'
                                }
							]
						})(<Input placeholder="Enter phone number"/>)}
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
						<Button className="btn"><Link to="/monestry">ဖျက်ရန်</Link></Button>&nbsp;&nbsp;
						<Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
					</Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(MonestryCreate);