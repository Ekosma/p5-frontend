const initialState = {
  grade: "",
  subject: ""
}

// Use the initialState as a default value
export default function appReducer(state = initialState, action) {
  // The reducer normally looks at the action type field to decide what happens
  switch (action.type) {
    case "UPLOAD_LESSON_SUCCESS":
      return action.formData
    default:
      return state
  }
}