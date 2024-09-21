import "./PersonTable.css";

export type Person = {
  id: number;
  name: string;
  age: number;
};

function PersonTable({ persons }: { persons: Person[] }) {
  const trlist = persons.map((person) => (
    <tr key={person.id}>
      <td>{person.name}</td>
      <td>{person.age}</td>
    </tr>
  ));
  return (
    <table className="PersonTable">
      <tbody>
        <tr key={0}>
          <td>이름</td>
          <td>나이</td>
        </tr>
        {trlist}
      </tbody>
    </table>
  );
}

export default PersonTable;
