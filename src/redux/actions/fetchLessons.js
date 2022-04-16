export const fetchLessons = (data) => {
  return(dispatch) => {
    fetch(`http://localhost:3001/lessons`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ lesson: data }),
    })
      .then((res) => res.json())
      .then((lesson) =>
        dispatch({ type: "UPLOAD_LESSON_SUCCESS", payload: lesson })
      )
  }
}
