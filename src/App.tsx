import type { Person } from "./PersonTable";
import PersonTable from "./PersonTable";

function App() {
  const persons1: Person[] = [
    { id: 31, name: "홍길동", age: 16 },
    { id: 32, name: "임꺽정", age: 19 },
    { id: 33, name: "전우치", age: 20 },
  ];
  const persons2 = [...persons1];
  persons2.reverse();
  return (
    <div>
      <PersonTable persons={persons1} />
      <hr />
      <PersonTable persons={persons2} />
    </div>
  );
}

export default App;
