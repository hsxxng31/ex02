import React from 'react';
import './App.css';

function App() {
  let persons = [{ name: '홍길동', age: 16 }, 
                 { name: '임꺽정', age: 19 },
                 { name: '전우치', age: 20 }];

  let tr = <tr><td>나이</td><td>이름</td></tr>;
  let trlist = [tr];
  for (let person of persons) {
    tr = <tr><td>{person.name}</td><td>{person.age}</td></tr>
    trlist.push(tr);
  }
  let table = <table>{trlist}</table>;
  return table;
}

export default App;

