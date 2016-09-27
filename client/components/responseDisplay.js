import React from 'react';
import { fetchAnswers } from '../actions/index'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { connect } from 'react-redux'




class Display extends React.Component {

  componentWillMount(){
    this.props.fetchAnswers()
  }

  render() {
    console.log('responses', this.props.responses)


    return (
      <div>
      <ul onClick={this.props.fetchAnswers}>
Click here to view Below
      {this.props.responses}
      </ul>
      </div>
    )
}
}
/*

// /////////////

class Display extends React.Component {
  renderList() {
return this.props.responses.map((response) =>{
  return (
    <li
    key={reponse.result}
    className="list-group-item">
    {response.result}
    </li>
  )
})
}
    render  () {
    return(
      <div>
      <ul onClick={this.props.fetchAnswers}>
Click here to view Below
      {this.renderList()}
      </ul>
      </div>
    )
}
}

*/
function mapStateToProps({ responses }) {

  console.log('mapstate',responses)
  return {
    responses: responses
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAnswers: fetchAnswers }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Display);
