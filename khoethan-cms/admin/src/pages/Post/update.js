import React from "react"
import {Form,Button,Input,Radio,textarea} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';



class PostEdit extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            type:"NEWS",
            data :[],
            file : [],
            title_img: '',
            img : []
        }
    }
    componentWillMount() {
        const id = this.props.match.params.id;
        this.getAllPostById(id)
        this.getFileById(id);
        
        
    };
    getAllPostById = (id)=>{
        api.get(`post/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            title : this.state.data.title,
            description : this.state.data.description,
            summary : this.state.data.summary,
            created_by:this.state.data.created_by
           
            
        }))
    }
    onTypeChange = e => {
        this.setState({
            type: e.target.value,
        })
    }
    getFileById = (id)=>{
        api.get(`post_image/${id}`).then(res=>this.setState({
            file : res.data.data
        })).then(()=>this.setState({
            img :this.state.file
        }))
       
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
            let posts = {...values}
            let userInfo=getUserInfo();
            posts.updated_by=userInfo.user_name;
            posts.type=this.state.type;
            posts.title_image=this.state.title_img;
            posts.image=this.state.img;
            if(!err){
                
                api.put(`post/${posts.id}`,posts)
                noti('success','ပြင်ပြီးပါပြီ');
                history.push('/post')
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
                <PageHeaderWrapper />

                <h3>ပြင်ဆင်ချက်များ</h3>
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator ('id')(<Input type="hidden"/>)}
                    </Form.Item>
                    <Form.Item label="အမည်">
                        {getFieldDecorator('title',{
                            rules :[
                               
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="ဖော်ပြချက်များ">
                        {getFieldDecorator('description',{
                            rules:[
                               
                            ]
                        })(<textarea cols="80" rows="2" placeholder="Enter Description"/>)}
                    </Form.Item> 
                    <Form.Item label="အနှစ်ချုပ်">
                        {getFieldDecorator('summary',{
                            rules:[
                               
                            ]
                        })(<Input placeholder="Enter Description"/>)}
                    </Form.Item> 
                    <Form.Item label="အမျိုးအစား">
                        <Radio.Group onChange={this.onTypeChange} value={this.state.type}>
                            <Radio value="NEWS">သတင်း</Radio>
                            <Radio value="ACTIVITY">လှုပ်ရှားမှုများ</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator('image', {
                        rules: [
                       
                        ]
                    })(<input type="file" name="image" multiple onChange={this.addFile} />)}
                    </Form.Item> 
                    <Form.Item label="ခေါင်းစဥ်ပုံထည့်ရန်">
                    {getFieldDecorator('title_image', {
                        rules: [
                            {
                                required: true,
                                message: 'Please upload your image',
                            },
                        ],
                    })(<input type="file" name="image" onChange={this.addFileTitle}/>)}
                    </Form.Item>                  
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းမည်</Button>
                        <Button className="btn" ><Link to="/post">မသိမ်းပါ</Link></Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(PostEdit);