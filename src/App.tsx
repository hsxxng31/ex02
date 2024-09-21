import Message from "./Message";

function App() {
  return (
    <div>
      <Message value="안녕하세요" />
      <Message value="안녕하세요" color="blue" />
      <Message value="안녕하세요" color="blue" size={40} />
    </div>
  );
}
export default App;
