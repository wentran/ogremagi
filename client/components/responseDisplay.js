import React from 'react';
import { fetchAnswers } from '../actions/index'
import { bindActionCreators } from 'redux'
import {Link} from 'react-router'
import { connect } from 'react-redux'



class Display extends React.Component {
//
// componentWillMount() {
//   if (this.props.responses === null){
//     this.props.fetchAnswers()
//   }
// }

componentDidMount() {
  console.log('mounted props', this.props);
}

componentDidUpdate() {
  console.log('updated props', this.props);
}

renderList() {
  if(this.props.responses === null) {
    return <div>loading</div>
  }
  return (
    this.props.responses.map(response =>

        <li
        key={response.result}
        className="list-group-item">
        {response.result}
        </li>

    )

  );
}


render() {
return(

  <ul className='list-group col-sm-4'
  onClick={this.props.fetchAnswers}>
  Click here to view Below
  // {console.log('in render======>',this.props.responses)}
  {this.renderList()}
  </ul>
)
}

}




/*
class Display extends React.Component {


  componentWillMount() {
    if (!this.props.responses){
      this.props.fetchAnswers()
    }
  }

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
/*
class Display extends React.Component {
  renderList() {


 responses.map((response) =>{
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
      <ul className='list-group col-sm-4'>
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


/*
return (
  <div>
  <ul onClick={this.props.fetchAnswers}>
Click here to view Below
{JSON.stringify(this.props.responses)}
  </ul>
  </div>
)}

}
*/
