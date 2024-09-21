import "./App.css";
import Numbers from "./Numbers";
import TimesTable from "./TimesTable";

function App() {
  return (
    <div>
      <Numbers count={3} />
      <Numbers count={6} />
      <Numbers count={9} />
      <TimesTable />
    </div>
  );
}

export default App;
