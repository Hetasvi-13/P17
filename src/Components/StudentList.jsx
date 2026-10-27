import React, { useState, useEffect } from 'react';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <p key={student.id}>
          ID: {student.id} - Email: {student.email}
        </p>
      ))}
    </div>
  );
}

export default StudentList;