// App.js
import React from 'react';
import Student from './component/Student';
import './App.css';

const App = () => {
  const students = [
    { id: 1362678428, 
      name: 'Phạm Đức Trung', 
      image: 'https://ims.baoyenbai.com.vn/NewsImg/7_2022/248060_26-7-nam-sinh.jpg', 
      email: 'trungpham291@gmail.com' 
    },
    { id: 23624628374, 
      name: 'Đặng Trà My', 
      image: 'https://img.lovepik.com/free-png/20220126/lovepik-junior-high-school-student-image-png-image_401807387_wh860.png', 
      email: 'mydt@gmail.com' 
    },
    
  ];

  return (
    
    <div className="app">
      {students.map((student) => (
        <Student key={student.id} {...student} />
      ))}
    </div>
  );
};

export default App;
