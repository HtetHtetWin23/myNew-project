import React from 'react';
import './style.css'
class Heading extends React.Component {
  render() {
    return (
      <div className="heading">
          {this.props.children}
      </div>
    );
  }
}

export default Heading;