import "./App.css";
import Numbers from "./Numbers";

function App() {
  return (
    <div>
      <Numbers count={3} />
      <Numbers count={6} />
      <Numbers count={9} />
    </div>
  );
}

export default App;
