import React from 'react';
import {FormGroup, FormControl, ControlLabel, Button, form} from 'react-bootstrap';
import { postMessages } from '../actions/index'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios';



export default class Display extends React.Component {
  renderList(){
    return (
      <li Click Here>

      </li>
    )
  }

  render() {
    return (
      <ul>
      Survey Answers Below
      </ul>
    )
  }

}
