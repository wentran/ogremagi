import axios from 'axios';


export const POST_SURVEY_RESPONSES =  "POST_SURVEY_RESPONSES"

export function postSurveyAnswers(surveyAnswers){
  console.log('surveyAnswers', surveyAnswers);
		const postSurveyAnswers =  axios.post('/sendMessage', {
      user: {
        message: surveyAnswers
      }
    })
    .then(function(response){
      console.log('saved successfully')
    })

  return {
    type: POST_SURVEY_RESPONSES,
    payload: postSurveyAnswers
  }

}
