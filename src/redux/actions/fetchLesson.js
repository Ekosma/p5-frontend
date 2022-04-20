/*function base64ToArrayBuffer(lesson) {
  let binary_string = window.atob(lesson.content);
  let len = binary_string.length;
  let bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
      bytes[i] = binary_string.charCodeAt(i);
  }
  lesson.content = bytes.buffer;
  return lesson;
}*/

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
      //.then((lesson) => base64ToArrayBuffer(lesson))
      .then((lesson) => dispatch({ type: "FETCH_SINGLE_LESSON_SUCCESS", payload: lesson }))
  }
}