/*
import { FETCH_ANSWERS } from '../actions/index';

export default function(state=null, action){
  switch(action.type) {
    // console.log('action received', action)
    case FETCH_ANSWERS:
    console.log('in redeucersss!!!', '++==', action)
    return action.payload.data
    // return [
    //   /* make a new array and put payload data in it and concat with state= state.concat([action.payload.data]); action.payload.data, ...state]
  }

  return state;
}

*/

import { FETCH_ANSWERS } from '../actions/index';

export default function(state=null, action){
  switch(action.type) {
    case FETCH_ANSWERS:
      console.log('action received------->', action.payload.data)
      console.log('in redeucersss!!!', '++==', action)
      return Object.assign({}, state, action.payload.data)
    // return [
    //   /* make a new array and put payload data in it and concat with state= state.concat([action.payload.data]);*/ action.payload.data, ...state]
  }

  return state;
}
