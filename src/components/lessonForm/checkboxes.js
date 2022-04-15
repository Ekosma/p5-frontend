import { useState } from "react";

function CheckBoxes() {

  const LESSONS = [
    { id: 1, name: 'Quadratics', grade: 'kindergarten', subject:'math'},
    { id: 2, name: 'Algebra Review', grade: 'first', subject:'english'},
    { id: 3, name: 'Linear Fun', grade: 'first', subject:'math'},
    { id: 4, name: 'English Essay Prompts', grade: 'sixth', subject:'science' },
    { id: 5, name: '11th History Exam', grade: 'twelfth', subject:'elective'},
    { id: 6, name: '10th English Quiz', grade: 'fourth', subject:'fineArt' },
    { id: 7, name: 'Geometry CrossWord', grade: 'fifth', subject:'history'},
  ];
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
    fineArt: false,
    athletics: false,
    elective: false,
  });

  const onGradeChange = (e) => {
    setGrade({...grade, [e.target.value]: e.target.checked})
    setLessons()
  }

  const onSubjectChange = (e) => {
    setSubject({...subject, [e.target.value]: e.target.checked})
    setLessons()
  }

  return (
    <>
      <div>
        <h2>Select Grade Level</h2>
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

        <label>
          <input 
            type="checkbox"
            value="second"
            name="grade"
            onChange={onGradeChange}
          />
          second
        </label>

        <label>
          <input 
            type="checkbox"
            value="third"
            name="grade"
            onChange={onGradeChange}
          />
          third
        </label>

        <label>
          <input 
            type="checkbox"
            value="fourth"
            name="grade"
            onChange={onGradeChange}
          />
          fourth
        </label>

        <label>
          <input 
            type="checkbox"
            value="fifth"
            name="grade"
            onChange={onGradeChange}
          />
          fifth
        </label>

        <label>
          <input 
            type="checkbox"
            value="sixth"
            name="grade"
            onChange={onGradeChange}
          />
          sixth
        </label>

        <label>
          <input 
            type="checkbox"
            value="seventh"
            name="grade"
            onChange={onGradeChange}
          />
          seventh
        </label>

        <label>
          <input 
            type="checkbox"
            value="eighth"
            name="grade"
            onChange={onGradeChange}
          />
          eighth
        </label>

        <label>
          <input 
            type="checkbox"
            value="ninth"
            name="grade"
            onChange={onGradeChange}
          />
          ninth
        </label>

        <label>
          <input 
            type="checkbox"
            value="tenth"
            name="grade"
            onChange={onGradeChange}
          />
          tenth
        </label>

        <label>
          <input 
            type="checkbox"
            value="eleventh"
            name="grade"
            onChange={onGradeChange}
          />
          eleventh
        </label>

        <label>
          <input 
            type="checkbox"
            value="twelfth"
            name="grade"
            onChange={onGradeChange}
          />
          twelfth
        </label>
      </div>
      <div>
        <h2>Select Class Type Level</h2>

        <label>
          <input 
            type="checkbox"
            value="english"
            name="subject"
            onChange={onSubjectChange}
          />
          english
        </label>

        <label>
          <input 
            type="checkbox"
            value="science"
            name="subject"
            onChange={onSubjectChange}
          />
          science
        </label>

        <label>
          <input 
            type="checkbox"
            value="math"
            name="subject"
            onChange={onSubjectChange}
          />
          math
        </label>

        <label>
          <input 
            type="checkbox"
            value="history"
            name="subject"
            onChange={onSubjectChange}
          />
          history
        </label>

        <label>
          <input 
            type="checkbox"
            value="fineArt"
            name="subject"
            onChange={onSubjectChange}
          />
          fineArt
        </label>

        <label>
          <input 
            type="checkbox"
            value="athletics"
            name="subject"
            onChange={onSubjectChange}
          />
          athletics
        </label>

        <label>
          <input 
            type="checkbox"
            value="elective"
            name="subject"
            onChange={onSubjectChange}
          />
          elective
        </label>
      </div>

      <ul>
        {

        }
      </ul>
      

      {/*<ul>
          {lessons.filter(x => subject[x.subject]).filter(y => grade[y.grade]).map((lesson) => (
            <li key={lesson.id}>
            Name: {lesson.name}<br />
            Grade: {lesson.grade}<br />
            Subject: {lesson.subject}
          </li>
          ))}
        </ul>*/}
    </>
  );
}

export default CheckBoxes;
