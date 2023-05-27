import React from 'react'



class NewsCard extends React.Component{
    render(){
        return(
            <div >
                <img className="image" src={this.props.image}></img>
                <img className="image" src={this.props.title_image}></img>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.created_at}</p>
                <p>{this.props.created_by}</p>
                
            </div>
        )
    }
}

export default NewsCard;