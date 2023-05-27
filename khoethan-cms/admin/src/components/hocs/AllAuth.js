import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Loader from '../Loader/Loader'
export default ChildComponent => {
  class AllAuth extends Component {
      
    render() {
      // const isSignedIn = false
      const { isSignedIn } = this.props
      switch (isSignedIn) {
        case false:
          return <Redirect to="/login" />;
        case null:
          return <Loader spinning={true}/>;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps({ auth:{isSignedIn} }) {
    return { isSignedIn };
  }

  return connect(mapStateToProps)(AllAuth)
};