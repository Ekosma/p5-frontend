export const indexLessons = (data) => {
  console.log(data)
  return(dispatch) => {
    fetch(`http://localhost:3001/lessons`, {
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((lessons) => dispatch({ type: "FETCH_LESSON_SUCCESS", payload: lessons }))
  }
}