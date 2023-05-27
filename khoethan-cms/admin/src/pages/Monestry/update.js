import React from "react"
import {Button,Form,Input,textarea} from "antd"
import {Link} from "react-router-dom"
import api from "../../apis";
import {noti, getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';



const formItemLayout = {
    labelCol : {
        xs : { span :15},
        sm : { span : 4}
    },
    wrapperCol : {
        xs : {span : 15},
        sm : {span : 16}
    },
};
const tailFormItemLayout = {
    wrapperCol : {
        xs : {
            span : 24,
            offset : 0
        },
        sm: {
            span :16,
            offset :8
        },
    },
};
class MonestryEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data : [],
            file: '',
            img : []
        }
    }
    

    
    componentWillMount(){
        const id = this.props.match.params.id;
        this.getMonestryById(id);
        this.getFileById(id);
        
    }
    getFileById = (id)=>{
        api.get(`monestry_image/${id}`).then(res=>this.setState({
            file : res.data.data
        })).then(()=>this.setState({
            img : this.state.file
        }))
    }
    getMonestryById(id){
        api.get(`monestry/${id}`).then(res=>this.setState({data:res.data.data})).then(()=>{
            this.props.form.setFieldsValue({
                id : this.state.data.id,
                name :this.state.data.name,
                abbot : this.state.data.abbot,
                number_of_monk : this.state.data.number_of_monk,
                festival_date: this.state.data.festival_date,
                description : this.state.data.description,
                phone_no : this.state.data.phone_no,
                created_by:this.state.data.created_by
            })
        })
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

    handleSubmit = async (e)=>{
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err,values)=>{
            values={...values}
            let userInfo=getUserInfo();
            values.updated_by=userInfo.user_name;
            values.image=this.state.img;
          
            console.log(values)
            if(!err){
                api.put(`monestry/${values.id}`,values);
                noti('success','ပြင်ပြီးပါပြီ');
                history.push('/monestry')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        })
    }
    render(){
        const {getFieldDecorator}=this.props.form;
        
        return(
            <div>
                <PageHeaderWrapper />

                

                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator ('id',{
                            rules:[

                            ]
                        })(<Input type="hidden"/>)}
                    </Form.Item>
                    <Form.Item label="အမည်">
                        {getFieldDecorator ('name',{
                            rules:[
                                
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="ကျောင်းထိုင်ဆရာတော်">
                        {getFieldDecorator ('abbot',{
                            rules:[
                                
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="သံဃာတော်များ">
                        {getFieldDecorator ('number_of_monk',{
                            rules:[
                                
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="ဘုရားပွဲကျင်းပသည့်ရက်">
                        {getFieldDecorator ('festival_date',{
                            rules:[
                                
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="ဖော်ပြချက်">
                        {getFieldDecorator ('description',{
                            rules:[
                                
                            ]
                        })(<textarea cols="80" rows="2"/>)}
                    </Form.Item>
                    <Form.Item label="ဖုန်းနံပါတ်">
                        {getFieldDecorator ('phone_no',{
                            rules:[
                               
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator("image", {
                        rules: [
                        
                        ]
                    })(<input type="file" name="image" multiple onChange={this.addFile} />)}
                    </Form.Item>                
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းရန်</Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to="/monestry">မသိမ်းပါ</Link></Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
export default Form.create()(MonestryEdit);