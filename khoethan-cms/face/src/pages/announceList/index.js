import React from 'react';
import './style.css'
import Heading from '../../components/heading'
import AnnounceListCard from './card'
import { Row, Col,Button } from 'antd';
import api from '../../apis'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'

//const url = "http://localhost:9991/"
class Announcement extends React.Component {

    constructor(){
        super()
        this.state = {
            data : [],
            currentPage: 1,
            todosPerPage: 3
            
        };
        this.handleClick = this.handleClick.bind(this);
    }handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    componentWillMount(){
        this.getAllAnnouncement();
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }

    getAllAnnouncement = () => {
        api.get('announce').then((result) => this.setState({
            data: result.data.data
        }))
    }
    
    render(){
        const { data, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = data.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return(
                
                    <div className="anount">    
                <Row>
                    <div className="one">
                    <AnnounceListCard id={todo.id} />
                    <h3 className="tit">{todo.title}</h3>
                    <p>{todo.summary}</p>
                    <p>Posted Date : <Moment format="DD-MM-YYYY HH:mm">{todo.created_at}</Moment></p>
                    <Button className="button"><a href={`announceDetail/${todo.id}`}>ဆက်လက်ဖတ်ရန်</a></Button>
                    </div>
                </Row>
           </div>
                
            )
         
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <div className="border">
                <li
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
            </div>
          );
        });
       return(
           <div className="body">
               
                <Heading name="anount">ကြေညာချက်များ</Heading>
                <ul>
                    {renderTodos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>
           </div>
       )
   }
}
export default Announcement;