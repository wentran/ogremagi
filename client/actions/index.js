import axios from 'axios';


export const POST_SURVEY_RESPONSES =  "POST_SURVEY_RESPONSES"

export function postSurveyAnswers(input){
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
    payload: surveyAnswers
  }

}





export const FETCH_ANSWERS = 'FETCH_ANSWERS';
export function fetchAnswers() {
  const request = axios.get('api/getanswers');
  console.log('+here++',request)
  return {
    type: FETCH_ANSWERS,
    payload: request
  };
}
