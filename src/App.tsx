import React from 'react';
import './App.css';

function App() {
  let persons = [{ name: '홍길동', age: 16 }, 
                 { name: '임꺽정', age: 19 },
                 { name: '전우치', age: 20 }];

  let trlist = persons.map(person => 
                <tr><td>{person.name}</td><td>{person.age}</td></tr>
  );
  return <table>
          <tr><td>이름</td><td>나이</td></tr>
          {trlist}
         </table>
}

export default App;

