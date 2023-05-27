import React from "react"
import api from '../../apis'
import {Link} from "react-router-dom"
import {Table, Button} from "antd"
import '../../App.css'
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import {noti} from '../../utils'

class Position extends React.Component{
    constructor(){
        super()
        this.state = {
            data : []
        }
    }

    componentWillMount(){
        this.getAllPosition()
    }
    componentDidMount(){
        this.getAllPosition()
    }

    deletePosition = (id) => {
        api.delete(`position/${id}`).then(() => this.getAllPosition())
    }

    getAllPosition(){
        api.get('position').then(res => this.setState({data: res.data}));
        noti('success','ဖျက်ပြီးပါပြီ!')
    }

    render(){
        const columns = [
            {
                title: 'အမည်',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: 'ဖော်ပြချက်',
                dataIndex: 'description',
                key: 'description'
            },
            {
                title: 'လုပ်ဆောင်ချက်များ',
                key: 'action',
                render: (text, record) => {
                    return <span>
                        <Button className="btn"><Link to={`position/${record.id}`}>ကြည့်ရန်</Link></Button>&nbsp;
                        <Button className="btn"><Link to={`/position/update/${record.id}`}>ပြင်ရန်</Link></Button>&nbsp;
                        <Button className="btn" onClick={() => this.deletePosition(record.id)}>ဖျက်ရန်</Button>
                    </span>
                }
            },
        ]
        const {data} = this.state.data
        console.log({data})
        return <div>
            <PageHeaderWrapper/>
            <h3>ရာထူးများ</h3>
            <div>
            <Button className="btn"><Link to="/position/create">ထည့်ရန်</Link></Button>
            </div>
            <Table columns={columns} dataSource={data}/>
        </div>
    }
}
export default Position;