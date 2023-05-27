import React from "react"
import {Button,Form,Input,Select,Row,Col} from "antd"
import {Link} from "react-router-dom"
import api from "../../apis";
import {noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'

import PageHeaderWrapper from 'components/PageHeaderWrapper';
const {Option} =Select
class CommitteeEdit extends React.Component{
    constructor(){
        super();
        this.state ={
            data : [

            ],
            img :'',
            positionSelect: '',
			position: [],
        }
    }
    componentWillMount(){
        const id = this.props.match.params.id;
        this.getAllPosition();
        this.getCommitteeById(id)
    }
    getAllPosition = () => {
		api.get('position').then(result => this.setState({
			position: result.data.data
		}))
    };
    getCommitteeById(id){
        api.get(`committee/${id}`).then(res=>this.setState({data:res.data.data})).then(()=>{
            this.props.form.setFieldsValue({
                id : this.state.data.id,
                name :this.state.data.name,
                description : this.state.data.description,
                phone_no:this.state.data.phone_no,
                created_by:this.state.data.created_by,
                position_id : this.state.data.position_id
            })
        })
    }
    onSelectChange = (value) => {
		this.setState({
			positionSelect: value
		});
    };
    addFile = (e) => {
        this.getBase64( e.target.files[0], (result) => this.setState({
           img : result
        }))
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
            values.image = this.state.img;
           
            console.log(values)
            if(!err){
                api.put(`committee/${values.id}`,values);
                noti('success','ပြင်ပြီးပါပြီ');
                history.push('/committee')
            }else{
                noti('error','မပြင်ရသေးပါ')
            }
        })
    }
    render(){
        const {getFieldDecorator}=this.props.form;
        const result = this.state.position.map((item) => {
			return <Option value={item.id}>{item.name}</Option>
		})
        const formItemLayout = {
            labelCol : {
                xs : { span :24},
                sm : { span : 8}
            },
            wrapperCol : {
                xs : {span : 24},
                sm : {span : 8}
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
        return(
            <div>
                <PageHeaderWrapper />
                <h3>ပြင်ဆင်ချက်များ</h3>
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
                    <Form.Item label="ဖော်ပြချက်">
                        {getFieldDecorator ('description',{
                            rules:[

                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="ဖုန်းနံပါတ်">
                        {getFieldDecorator ('phone_no',{
                            rules:[
                               
                            ]
                        })(<Input/>)}
                    </Form.Item>
                    <Form.Item label="ရာထူး">
						{getFieldDecorator('position_id', {
							rules: [
								]
						})( 
							<Select
								showSearch
								style={{ width: "85%" }}
								placeholder="Select position name"
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
                    <Form.Item label="ပုံထည့်ရန်">
                    {getFieldDecorator('image', {
                        rules: [
                       
                        ]
                    })(<input style={{ width: "85%" }} type="file" name="image" onChange={this.addFile} />)}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button className="btn" htmlType="submit">သိမ်းရန်</Button>&nbsp;&nbsp;
                        <Button className="btn"><Link to="/committee">မသိမ်းပါ</Link></Button>
                    </Form.Item>

                </Form>
            </div>
        )
    }
}
export default Form.create()(CommitteeEdit);