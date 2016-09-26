import React from 'react';
import { Component } from 'react';
import SurveyForm from './SurveyForm';
import Display from './responseDisplay';

export default class App extends Component {
  render() {
    return (
      <div>
        <SurveyForm />
        <Display />
      </div>
    );
  }
}
