import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>Hello Navbar</h1>
          <h2>This is where the magic happens</h2>
        </header>
      </div>
    </div>
  );
}

export default App;
