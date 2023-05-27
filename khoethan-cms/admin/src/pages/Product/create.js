import React from "react"
import { Form, Input, Button, Select,textarea } from "antd"
import { Link } from "react-router-dom"
import api from "../../apis";
import { noti,getUserInfo} from '../../utils'
import '../../App.css'
import history from '../../router/history'

import PageHeaderWrapper from 'components/PageHeaderWrapper';

const { Option } = Select;

const formItemLayout = {
	labelCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 8 },
	}
};
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
	},
};

class ProductCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			img: [],
			productTypeSelect: '', 
			productType: [],



		}
	}

	componentWillMount() {
		this.getAllProductType();
	};

	getAllProductType = () => {
		api.get('product_type').then(result => this.setState({
			productType: result.data.data
		}))
	};

	onSelectChange = (value) => {
		this.setState({
			productTypeSelect: value
		});
	};

	reset = () => {
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
			console.log('Error: ', error)
		}
	}



	handleSubmit = async (e) => {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {

			if (!err) {
				let product = { ...values }
				let userInfo=getUserInfo();
				product.created_by = userInfo.user_name;
				product.updated_by = "";
				product.productType_id = this.state.productTypeSelect;
				product.image = this.state.img;
				
				console.log(product.image)

				api.post('product', product).then((result) => console.log(result))
				console.log("product", product)

				noti('success', 'အောင်မြင်ပါတယ်!', 'ထည့်သွင်းပြီးပါပြီ')
				history.push('/product');

			} else {
				noti('error', 'မအောင်မြင်ပါ!', 'ထည့်ရန်ကျန်သေးသည်')
			}
		});
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		const result = this.state.productType.map((item) => {
			return <Option value={item.id}>{item.product_type_name}</Option>
		})
		console.log("select", result)

		return (
			<div>
				<PageHeaderWrapper />
				<h3>တည်ဆောက်ရန်</h3>
				<Form {...formItemLayout} onSubmit={this.handleSubmit}>
					<Form.Item label="အမည်">
						{getFieldDecorator('product_name', {
							rules: [
								{
									required: true,
									message: 'Please input prouduct name'
								}
							]
						})(<Input style={{ width: "90%" }} placeholder="Enter product name" />)}
					</Form.Item>
					<Form.Item label="ဖော်ပြချက်">
						{getFieldDecorator('description', {
							rules: [

							]
						})(<textarea rows="2" cols="80" style={{ width: "90%" }} 
						placeholder="Enter description" />)}

					</Form.Item>
					<Form.Item label="အမျိူးအစား">
						{getFieldDecorator('productType_id', {
							rules: [
								{
									required: true,
									message: 'please choose the product type'
								}],
						})(
							<Select
								showSearch
								style={{ width: "90%" }}
								placeholder="Select product type name"
								optionFilterProp="children"
								onChange={this.onSelectChange}
								filterOption={(input, option) =>
									option.props.children.toLowerCase().indexOf(input.toLowerCase())
								}
							>
								{result}
							</Select >

						)}
					</Form.Item>
					<Form.Item label="ပုံထည့်ရန်">
						{getFieldDecorator('image', {
							rules: [
								{
									required: 'true',
									message: 'Please upload your image'
								}
							]
						})(<input type="file" name="image" multiple onChange={this.addFile} />)}
					</Form.Item>
					
					<Form.Item {...tailFormItemLayout}>
						<Button className="btn" htmlType="submit">ထည့်ရန်</Button>&nbsp;&nbsp;
					    <Button className="btn"><Link to="/product">ဖျက်ရန်</Link></Button>&nbsp;&nbsp;					    
						<Button className="btn" onClick={this.reset}>ရှင်းရန်</Button>
					</Form.Item>
				</Form>


			</div>
		)
	}
}
export default Form.create()(ProductCreate);