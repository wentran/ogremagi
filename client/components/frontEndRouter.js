import axios from 'axios';


export const POST_SURVEY_RESPONSES =  "POST_SURVEY_RESPONSES"

export function postSurveyAnswers(surveyAnswers){
  console.log('surveyAnswers', surveyAnswers);

  return {
    type: POST_SURVEY_RESPONSES,
    surveyAnswers
  }

}
