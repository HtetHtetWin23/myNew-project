import React from "react"
import {Form,Button,Input,textarea} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';


class AnnouncementEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data :[]
        }
    }
    
   

    componentWillMount(){
        const id = this.props.match.params.id;
        this.getAllAnnouncementById(id)
    }

    getAllAnnouncementById(id){
        api.get(`announce/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            title : this.state.data.title,
            description :this.state.data.description,
            summary :this.state.data.summary,
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
                api.put(`announce/${values.id}`,values);
                noti('success','ပြင်ပြီးပါပြီ');
                history.push('/announce');
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
                sm : { span : 2}
            },
            wrapperCol :{
                xs : {span : 24},
                sm : {span : 18}
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
                        {getFieldDecorator('title',{
                            rules :[]
                        })(<Input/>)}
                    </Form.Item>
                   
                    <Form.Item label="ဖော်ပြချက်">
                        {getFieldDecorator('description',{
                            rules:[]
                               
                            
                        })(<Input/>)}
                    </Form.Item> 
                    <Form.Item label="အနှစ်ချုပ်">
				       {getFieldDecorator ('summary',{
						   rules :[]
					   })(<textarea cols="90" rows="2" />)}
				   
				   </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းမည်</Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to="/announce">မသိမ်းပါ</Link></Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(AnnouncementEdit);