import React from 'react';
import './style.css'
import NewsCard from './card'
import { Row,Button, Col ,Pagination,Icon} from 'antd';
import {Link} from 'react-router-dom'
import api from '../../apis'
import Heading from '../../components/heading'
import Moment from 'react-moment'


const url="http://localhost:9991/" 
class News extends React.Component{
    constructor (){
        super()
        this.state={
            data:[],
            post_data:[],
            currentPage: 1,
            todosPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
    }
    componentWillMount(){
        this.getPostList();
    }
    getPostList(){
        api.get('post').then(result=>this.setState({
            post_data : result.data.data
        }))
    }
    render(){
        const { post_data, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = post_data.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
          return(
            <div className="body">
                <Row>
                    <Col  xs={24} sm={24} md={12} lg={6}>
                     <img className="image" src={url+todo.title_image} />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={18}>
                    <div className="news">
           <h3>{todo.title}</h3>
           <p>{todo.summary}</p>
           <p>Posted Date : <Moment format="DD-MM-YYYY HH:mm">{todo.created_at}</Moment></p>
           <p>Posted By :{todo.created_by}</p>
           <Button  className="button"><Link to={`postDetail/${todo.id}`}>ဆက်လက်ဖတ်ရှုရန်</Link></Button>
           </div>
                    </Col>
         
           
           <br></br>  
            </Row><br></br>
        </div>
          )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(post_data.length / todosPerPage); i++) {
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
        return (
           <div className="body">
                <Heading name="post">သတင်းများ</Heading>
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
export default News;