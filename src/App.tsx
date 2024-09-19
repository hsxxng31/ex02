import React from 'react';
import './App.css';

function App() {
  let persons = [{ name: '홍길동', age: 16 }, 
                 { name: '임꺽정', age: 19 },
                 { name: '전우치', age: 20 }];

  let td1 = <td>이름</td>;
  let td2 = <td>나이</td>;
  let tr = React.createElement("tr", null, td1, td2);
  let trlist = [tr];
  for (let person of persons) {
    td1 = <td>{ person.name }</td>
    td2 = <td>{ person.age }</td>
    tr = React.createElement("tr", null, td1, td2);
    trlist.push(tr);
  }
  let table = React.createElement("table", null, trlist);
  return table;
}

export default App;

