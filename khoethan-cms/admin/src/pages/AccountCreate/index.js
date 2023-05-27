import React from "react"
import api from '../../apis'
import {Link} from "react-router-dom"
import {Table, Button} from "antd"
import PageHeaderWrapper from '../../components/PageHeaderWrapper';
import './style.css'

class AccountList extends React.Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    componentWillMount(){
        this.getAllUsers()
    }

    deleteUsers = (id) => {
        api.delete(`users/${id}`).then(() => this.getAllUsers())
    }

    getAllUsers(){
        api.get('users').then(res => this.setState({data: res.data}))
    }

    render(){
        const columns = [
            {
                title: 'အမည်',
                dataIndex: 'user_name',
                key: 'user_name'
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
            //     title: 'မှတ်ပုံတင်',
            //     dataIndex: 'nric',
            //     key: 'nric'
            // },
            {
                title: 'လုပ်ဆောင်ရန်',
                key: 'action',
                render: (text, record) => {
                    return <span>
                            <Button className="btn">
                            <Link to={`accountcreate/${record.id}`}>အသေးစိတ်</Link>
                            </Button>
                            {" "}
                            <Button className="btn">
                            <Link to={`/accountcreate/update/${record.id}`}>ပြင်ဆင်ရန်</Link>
                            </Button>             
                            {" "}
                            <Button className="btn" onClick={() => this.deleteUsers(record.id)}>
                            ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        const {data} = this.state.data
        return <div>
            <PageHeaderWrapper />
            <h3>အကောင့်စာရင်း</h3><br></br>
            <Button className="create-btn">
            <Link to="/accountcreate/create">အသစ်ဖန်တီးရန်</Link>
            </Button><br></br>
            <br/>
            <Table columns={columns} dataSource={data}/>
        </div>
    }
}
export default AccountList;