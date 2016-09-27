import React from 'react';
import { fetchAnswers } from '../actions/index'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { connect } from 'react-redux'
import axios from 'axios';



class Display extends React.Component {


  render() {
    console.log('responses', this.props.responses)

    return (
      <ul onClick={this.props.fetchAnswers}>
Click here to view Below
      </ul>
    )
  }

}



function mapStateToProps({ responses }) {
  // Whatever is returned will show up as props
  // inside
  console.log('mapstate',responses)
  return {
    responses: responses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers: fetchAnswers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
