import { useState } from "react";


// This holds a list of some fiction people
// Some  have the same name but different age and id
const LESSONS = [
  { id: 1, name: 'Quadratics', grade: 'kindergarten', subject:'Mathematics'},
  { id: 2, name: 'Algebra Review', grade: 'first', subject:'Mathematics'},
  { id: 3, name: 'Linear Fun', grade: '9th and 11th', subject:'Mathematics'},
  { id: 4, name: 'English Essay Prompts', grade: '9th, 10th, and 11th', subject:'English' },
  { id: 5, name: '11th History Exam', grade: '11th', subject:'History'},
  { id: 6, name: '10th English Quiz', grade: '10th', subject:'English' },
  { id: 7, name: 'Geometry CrossWord', grade: '10th', subject:'Mathematics'},
];


function Search(){
  const [lessons, setLessons] = useState(LESSONS);

  const [name, setName] = useState('');

  const [grade, setGrade] = useState({
    kindergarten: false,
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
    seventh: false,
    eighth: false,
    ninth: false,
    tenth: false,
    eleventh: false,
    twelfth: false,
  });
  const [subject, setSubject] = useState({
    english: false,
    math: false,
    science: false,
    history: false,
    fineArts: false,
    athletics: false,
    elective: false,
  });

  const onGradeChange = (e) => {
    setGrade({...grade, [e.target.value]: e.target.checked})
  }

  const onSubjectChange = (e) => {
    setSubject({...subject, [e.target.value]: e.target.checked})
  }

  return (
    <>
      <div>
        <label>
          <input 
            type="checkbox"
            value="kindergarten"
            name="grade"
            onChange={onGradeChange}
          />
          kindergarten
        </label>

        <label>
          <input 
            type="checkbox"
            value="first"
            name="grade"
            onChange={onGradeChange}
          />
          first
        </label>
        <ul>
          {lessons.filter(x => grade[x.grade]).map((lesson) => (
            <li key={lesson.id}>{lesson.name}{lesson.grade}</li>
          ))}
        </ul>

      </div>
    </>
  );
}






/*function Search() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundlessons, setFoundlessons] = useState(LESSONS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = LESSONS.filter((lesson) => {
        return lesson.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundlessons(results);
    } else {
      setFoundlessons(LESSONS);
      // If the text field is empty, show all lessons
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="lesson-list">
        {foundlessons && foundlessons.length > 0 ? (
          foundlessons.map((lesson) => (
            <li key={lesson.id} className="lesson">
              <span className="lesson-id">{lesson.id}</span>
              <span className="lesson-name">{lesson.name}</span>
              <span className="lesson-grades">{lesson.grades}</span>
              <span className="lesson-subject">{lesson.subject}</span>
              <span className="lesson-pdf">{lesson.pdf} </span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}*/

export default Search;