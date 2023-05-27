import React from "react"
import PageHeaderWrapper from 'components/PageHeaderWrapper';
import api from 'apis';
import { Card } from 'antd';
const { Meta } = Card;
const imgurl = "http://localhost:9991/"

class EmpDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: this.props.match.params.id,
            data : []
        }
    }

    componentDidMount() {
        this.getData();
    }

    async getData() {
        const response = await api.get(`emp/${this.state.id}`);
        if(response && response.status == 200){
           this.setState({data: response.data.data[0]})
        }
    }

    render(){
        const data = this.state.data;
        return(
            <div>
                <PageHeaderWrapper />
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="employee image" 
                            src={imgurl+data.image} />
                        }
                >
                    <Meta title={data.name}/>
                </Card>
            </div>
        )
    }
}

export default EmpDetail;