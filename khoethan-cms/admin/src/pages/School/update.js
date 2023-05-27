import React from "react"
import {Form,Button,Input,Row,Col} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';



class SchoolEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data :[],
            file : '',
            img : []
        }
    }
    componentWillMount() {
        const id = this.props.match.params.id;
        this.getAllSchoolById(id);
        this.getFileById(id); 
        
    };
    getFileById = (id)=>{
        api.get(`school_image/${id}`).then(res=>this.setState({
            file : res.data.data
        })).then(()=>this.setState({
            img : this.state.file
        }))
    }
   
    getAllSchoolById(id){
        api.get(`school/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            name : this.state.data.name,
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
    
    
    getBase64(file,cb){
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(){
            cb(reader.result)
        };
        reader.onerrror = function (error){
            console.log('Error : ',error)
        }
    }
   
    handleSubmit = e=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            values = {...values}
            let userInfo=getUserInfo();
            values.updated_by=userInfo.user_name;
            values.image=this.state.img;
            if(!err){
                console.log(values);
                api.put(`school/${values.id}`,values).then(result=>console.log(result))
                noti('success','ပြင်ပြီးပါပြီ');
                
                history.push('/school')
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
                xs :{span : 15},
                sm : { span : 4}
            },
            wrapperCol :{
                xs : {span : 20},
                sm : {span : 16}
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
                        {getFieldDecorator('name',{
                            rules :[
                               
                            ]
                        })(<Input style={{ width: "85%" }}/>)}
                    </Form.Item>
                    <Form.Item label="ဖော်ပြချက်များ">
                        {getFieldDecorator('description',{
                            rules:[
                                
                            ]
                        })(<textarea rows="2" style={{ width: "85%" }}/>)}
                    </Form.Item> 
                    <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator('image', {
                        rules: [
                       
                        ]
                    })(<input type="file" name="image" multiple onChange={this.addFile} />)}
                    </Form.Item>                   
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းမည်</Button>
                        <Button className="btn" ><Link to="/school">မသိမ်းပါ</Link></Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(SchoolEdit);