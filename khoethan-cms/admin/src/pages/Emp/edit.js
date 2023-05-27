import React from "react"
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import { Form, Input, Button } from 'antd';
import api from 'apis';
import { noti } from 'utils/index';

const image = {
    width: '200px',
    height: '200px',
    backgroundColor: '#fff',
    padding: '20px',
    marginLeft: '30%',
}

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
};

const apiUrl = "http://localhost:9991/"
  
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

class EmpCreate extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            file: null,
            id: this.props.match.params.id,
            data : [],
            preview: null,
        };
    }
    
    componentDidMount() {
        this.getData();
    }

    async getData() {
        const response = await api.get(`emp/${this.state.id}`);
        if(response && response.status == 200){
            let data = response.data.data[0];
            let imgUrl = data.image ? apiUrl + data.image : '';
           this.setState({data: data, preview: imgUrl})
           this.setInitialValues()
        }
    }

    onChange = (e) =>{
        let preview = URL.createObjectURL(e.target.files[0]);
        this.getBase64(e.target.files[0], (result) => {
            this.setState({preview: preview, file : result})
        });
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

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                values.image = this.state.file
                console.log(values)
                api.put(`emp/${values.id}`, values).then((result) => console.log(result))
                noti('success', 'Successfully!', 'Emp has been updated successfully.')   
            } else {
                noti('error', 'Unsuccessfully!', 'Fail to update.')
            }
        });
    };

    setInitialValues = () => {
        const data = this.state.data;
        const { form } = this.props;
        if (data)
            form.setFieldsValue({
                id: data.id,
                name: data.name,
            });
        };

    render(){
        const { getFieldDecorator } = this.props.form;
       
        return(
            <div>
                <PageHeaderWrapper />
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>

                    <Form.Item>
                    {getFieldDecorator("id")(<Input type="hidden"/>)}
                    </Form.Item>

                    <Form.Item label="Name">
                    {getFieldDecorator("name", {
                        rules: [
                        {
                            required: true,
                            message: "Please enter your name"
                        }
                        ]
                    })(<Input placeholder="Enter Name"/>)}
                    </Form.Item>

                    <Form.Item label="Profile Image">
                    {getFieldDecorator("image", {
                    })(<input type="file" name="image" onChange= {this.onChange} />)}
                    </Form.Item>
                    <img src={this.state.preview} style={image}/>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default  Form.create()(EmpCreate);