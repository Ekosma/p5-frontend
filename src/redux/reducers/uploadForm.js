const initialState = {
  lessons: [],
  lesson:[],
  comments: [],
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "UPLOAD_LESSON_SUCCESS":
      //console.log(action)
      return {...state, lessons: action.payload}
    case "FETCH_LESSONS_SUCCESS":
      return {...state, lessons: action.payload}
    case "FETCH_SINGLE_LESSON_SUCCESS":
      return {...state, lesson: action.payload}
    case "ADD_COMMENTS_SUCCESS":
      return  {...state, comments: action.payload}
      case "FETCH_COMMENTS_SUCCESS":
        return  {...state, comments: action.payload}
    default:
      return state
  }
}
