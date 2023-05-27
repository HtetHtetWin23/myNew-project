import React from "react"
import api from '../../apis'
import {Link} from "react-router-dom"
import {Table, Button} from "antd"

class Contact extends React.Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    componentWillMount(){
        this.getAllContact()
    }

    deleteContact = (id) => {
        api.delete(`contact/${id}`).then(() => this.getAllContact())
    }

    getAllContact(){
        api.get('contact').then(res => this.setState({data: res.data.data}))
    }

    render(){
        const columns = [
           
            {
                title: 'အမည်',
                dataIndex: 'name',
                key: 'name'
            },
            // {
            //     title: 'အီးမေးလ်',
            //     dataIndex: 'email',
            //     key: 'email'
            // },
            {
                title: 'ဖုန်းနံပါတ်',
                dataIndex: 'phone_no',
                key: 'phone_no'
            },
            // {
            //     title: 'အကြောင်းအရာ',
            //     dataIndex: 'description',
            //     key: 'description'
            // },
            // ,
            // {
            //     title: 'စာကိုယ်',
            //     dataIndex: 'subject',
            //     key: 'subject'
            // },
            
            {
                title: 'လုပ်ဆောင်ချက်များ',
                key: 'action',
                render: (text, record) => {
                    return <span>
                        <Button className="btn">
                            <Link to={`contact/${record.id}`}>ကြည့်ရန်</Link>
                        </Button>&nbsp;
                        <Button className="btn" onClick={() => this.deleteContact(record.id)}>
                            ပယ်ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        // const {data} = this.state.data.data
        return <div>
            <h3>ဆက်သွယ်ချက်များ</h3>
            
            <Table columns={columns} dataSource={this.state.data}/>
        </div>
    }
}
export default Contact;