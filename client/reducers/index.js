import { combineReducers } from 'redux';
import surveyAnswers from './survey_reducer';

const rootReducer = combineReducers({
  responses: surveyAnswers
});

export default rootReducer;
