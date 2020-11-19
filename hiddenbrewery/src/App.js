import "./App.css";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
