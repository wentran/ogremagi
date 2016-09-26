import axios from 'axios';


export const POST_SURVEY_RESPONSES =  "POST_SURVEY_RESPONSES"

export function postSurveyAnswers(input){
  console.log('input', input);
  const surveyAnswers = axios.post('/api/sendanswers', {
    user: {
      message: input
    }
  })
  .then(function(response){
    console.log('saved successfully')
  })
  return {
    type: POST_SURVEY_RESPONSES,
    surveyAnswers
  }

}
