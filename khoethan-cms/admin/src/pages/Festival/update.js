import React from "react"
import {Form,Button,Input,Select,Row,Col} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
// import './style.css'

// const {Option} =Select

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
class FestivalEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data :[],
            file : '',
            img : []
            
        }
    }
    componentWillMount(){
        let id = this.props.match.params.id;
        this.getFestivalById(id);
        this.getFileById(id);
        
       
        
    }
  
    getFileById = (id)=>{
        api.get(`festival_image/${id}`).then(res=>this.setState({
            file : res.data.data
        })).then(()=>this.setState({
            img :this.state.file
        }))
       
    }
   
    getFestivalById(id){
        api.get(`festival/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            title : this.state.data.title,
            description :this.state.data.description,
            created_by:this.state.data.created_by

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

    handleSubmit = e=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            values = {...values}
            let userInfo=getUserInfo();
            values.updated_by=userInfo.user_name;
            values.image=this.state.img;
           
            if(!err){
                
                api.put(`festival/${values.id}`,values);
                noti('success','ပြင်ပြီးပါပြီ');
                history.push('/festival')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        })
    }
    render(){
       
        const {getFieldDecorator} =this.props.form;
       
        
        return(
            <div>
                 <PageHeaderWrapper />
                <h3 className="clinic-heading">ပြင်ဆင်ချက်များ</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator ('id')(<Input type="hidden"/>)}
                    </Form.Item>
                    <Form.Item label="အမည်">
                        {getFieldDecorator('title',{
                            rules :[
                                
                            ]
                        })(<Input style={{ width: "97%" }}/>)}
                    </Form.Item>
                    
                    <Form.Item label="ဖော်ပြချက်">
                        {getFieldDecorator('description',{
                            rules:[
                               
                            ]
                        })(<Input style={{ width: "97%" }}/>)}
                    </Form.Item> 
                    <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator("image", {
                        rules: [
                        
                        ]
                    })(<input type="file" name="image" multiple onChange={this.addFile} />)}
                    </Form.Item>                  
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းရန်</Button>
                        <Button className="btn"><Link to="/festival">မသိမ်းပါ</Link></Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(FestivalEdit);