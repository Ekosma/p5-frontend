export const fetchComments = (data) => {
  //console.log(data)
  return(dispatch) => {
    //console.log("fetchComments")
    fetch(`http://localhost:3001/reviews/${data}`, {
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((comments) => dispatch({ type: "FETCH_COMMENTS_SUCCESS", payload: comments }))
  }
}