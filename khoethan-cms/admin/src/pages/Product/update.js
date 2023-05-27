import React from "react"
import {Form,Button,Input,Select,textarea} from "antd";
import {Link} from "react-router-dom"
import api from '../../apis'
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
const { Option } = Select;


class ProductEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data :[],
            file : '',
            productTypeSelect: '',
            productType: [],
            img:[]
           
        }
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        this.getAllProductType();
        this.getProductById(id);
        this.getFileById(id);
        
        
        
    };
    getFileById = (id)=>{
        api.get(`product_image/${id}`).then(res=>this.setState({
            file : res.data.data
        })).then(()=>this.setState({
            img :this.state.file
        }))
    }

	getAllProductType = () => {
		api.get('product_type').then(result => this.setState({
			productType: result.data.data
		}))
    };
    getProductById =(id)=>{
        api.get(`product/${id}`).then(res=>this.setState({data :res.data.data})).then(()=>this.props.form.setFieldsValue({
            id:this.state.data.id,
            product_name : this.state.data.product_name,
            productType_id:this.state.data.productType_id,
            product_type_name : this.state.data.productType_name,
            description :this.state.data.description, 
            created_by:this.state.data.created_by         
            

        }))
    }

    onSelectChange = (value) => {
		this.setState({
			productTypeSelect: value
		});
    };
    
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
            let product = {...values}
            let userInfo=getUserInfo();
            product.updated_by=userInfo.user_name;

            product.image=this.state.img;
            console.log(product.image);
            if(!err){
               
                api.put(`product/${product.id}`,product).then((result) => console.log(result))
                
                noti('success','ပြင်ပြီးပါပြီ');
                history.push('/product')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        })
    }
    render(){
        console.log(this.state.data);
        const result = this.state.productType.map((item) => {
			return <Option value={item.id}>{item.product_type_name}</Option>
		})
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
                 <PageHeaderWrapper />
                
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item>
                        {getFieldDecorator ('id')(<Input type="hidden"/>)}
                    </Form.Item>
                    <Form.Item label="အမည်">
                        {getFieldDecorator('product_name',{
                            rules :[
                                {
                                    required :true,
                                    message : 'Please input product name'
                                }
                            ]
                        })(<Input style={{width:'90%'}}/>)}
                    </Form.Item>
                    <Form.Item label="အမျိုးအစား">
						{getFieldDecorator('productType_id', {
							rules: [
                            ]
						})(
							<Select
								showSearch
								style={{ width: '90%' }}
								placeholder="Select product type name"
								optionFilterProp="children"
								onChange={this.onSelectChange}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase())
								}
							>
								{result}
							</Select>

						)}
					</Form.Item>
                    <Form.Item label="ဖော်ပြချက်">
                        {getFieldDecorator('description',{
                            rules:[

                            ]
                        })(<textarea cols="35" rows="2"/>)}
                    </Form.Item>
                    <Form.Item label="ပုံထည့်ရန်">
                        {getFieldDecorator('image',{
                            rules :[
                                {
                                    required :true,
                                    message : 'Please upload your image'
                                }
                            ]
                        })(<input type="file" name="image" multiple onChange={this.addFile}/>)}
                    </Form.Item>                 
                    <Form.Item {...tailFormItemLayout}>
    
                        <Button className="btn" htmlType="submit">သိမ်းမည်</Button>
                        <Button className="btn"><Link to="/product">မသိမ်းပါ</Link></Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
export default Form.create()(ProductEdit);