const initialState = {
  lessons: []
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "UPLOAD_LESSON_SUCCESS":
      //console.log(action)
      return {...state, lessons: action.payload}
    case "FETCH_LESSON_SUCCESS":
      return {...state, lessons: action.payload}
    default:
      return state
  }
}