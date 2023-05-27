import React from 'react';
import './style.css'

class StudentCard extends React.Component {
   render(){
       return(
       
        <div>
            <div>
                <p>{this.props.grade}</p>
                <p>{this.props.teacher_name}</p>
                <p>{this.props.school_girl}</p>
                <p>{this.props.school_boy}</p>
                <p>{this.props.total_student}</p>
            </div>
        </div>
       
                
       
       )
   }
}
export default StudentCard;