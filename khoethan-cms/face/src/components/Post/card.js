import React from 'react';
import './style.css'

class PostCard extends React.Component {
   render(){
       return(
            <div className="post-card">
                <img src={this.props.title_image}/>
                <p className="ttt">{this.props.title}</p>
                <p>{this.props.description}</p>
                <p>{this.props.summary}</p>
                {/* <button className="btn"><a href={`postDetail/${this.props.id}`}>continue</a></button> */}
            </div>
       )
   }
}
export default PostCard;