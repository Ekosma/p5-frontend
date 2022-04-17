export const fetchLessons = (data) => {
  console.log(data)
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value)
  }
  console.log(formData)
  return(dispatch) => {
    console.log("fetchLessons")
    fetch(`http://localhost:3001/lessons`, {
      headers: {
        //"Content-Type": "application/json",
        'Accept': 'application/json'
      },
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((lessons) => dispatch({ type: "UPLOAD_LESSON_SUCCESS", payload: lessons }))
  }
}

