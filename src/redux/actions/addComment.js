export const addComment = (data) => {
  console.log(data)
  return(dispatch) => {
    console.log("addComments")
    fetch(`http://localhost:3001/reviews`, {
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ comment: data }),
    })
      .then((res) => res.json())
      .then((comments) => dispatch({ type: "ADD_COMMENT_SUCCESS", payload: comments }))
  }
}