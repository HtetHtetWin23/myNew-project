import React from "react"
import {Form,Button,Input,Col,Row} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';



class StudentListEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data :[]
        }
    }
    
   

    componentWillMount(){
        const id = this.props.match.params.id;
        this.getAllStudentById(id)
    }

    getAllStudentById(id){
        api.get(`student/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            grade : this.state.data.grade,
            teacher_name : this.state.data.teacher_name,
            school_girl : this.state.data.school_girl,
            school_boy : this.state.data.school_boy,
            total_student : this.state.data.total_student,
            created_by:this.state.data.created_by

        }))
    }
    handleSubmit = e=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            values = {...values}
            let userInfo=getUserInfo();
            values.updated_by=userInfo.user_name;
            if(!err){
                console.log(values);
                api.put(`student/${values.id}`,values);
                noti('success','ပြင်ပြီးပါပြီ');
                
                history.push('/studentList')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        })
    }
    render(){
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
                    <Form.Item label="အတန်း">
                        {getFieldDecorator('grade',{
							rules:[
								
							]
						})(<Input/>)}
                   </Form.Item>
				   <Form.Item label="အတန်းပိုင်အမည်">
				       {getFieldDecorator ('teacher_name',{
						   rules :[
                            
						   ]
					   })(<Input style={{ width: "85%" }} placeholder="Enter teacher-name"/>)}
				   
				   </Form.Item>
                   <Form.Item label="ကျောင်းသူ">
				       {getFieldDecorator ('school_girl',{
						   rules :[
                            
						   ]
					   })(<Input style={{ width: "85%" }} placeholder="Enter school girl"/>)}
				   
				   </Form.Item>
                   <Form.Item label="ကျောင်းသား">
				       {getFieldDecorator ('school_boy',{
						   rules :[
                            
						   ]
					   })(<Input style={{ width: "85%" }} placeholder="Enter school boy"/>)}
				   
				   </Form.Item>
                   <Form.Item label="စုစုပေါင်း">
				       {getFieldDecorator ('total_student',{
						   rules :[
                            
						   ]
					   })(<Input style={{ width: "85%" }} placeholder="Enter total student"/>)}
				   
				   </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းမည်</Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to="/studentList">မသိမ်းပါ</Link></Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(StudentListEdit);