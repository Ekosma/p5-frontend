export const fetchLesson = (data) => {
  console.log(data)
  return(dispatch) => {
    console.log("fetchLessons")
    fetch(`http://localhost:3001/lessons/${data}`, {
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((lessons) => dispatch({ type: "UPLOAD_LESSON_SUCCESS", payload: lessons }))
  }
}