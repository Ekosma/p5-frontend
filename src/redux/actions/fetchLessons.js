export const fetchLessons = (data) => {
  console.log(data)
  return(dispatch) => {
    console.log("fetchLessons")
    fetch(`http://localhost:3001/lessons`, {
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ lesson: data }),
    })
      .then((res) => res.json())
      .then((lesson) => dispatch({ type: "UPLOAD_LESSON_SUCCESS", payload: lesson }))
  }
}
