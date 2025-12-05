import './App.css';
import Header from './component/Header';
import Router from './component/Routers';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToastContainer position="top-right" autoClose={1500} />
        <Header /> 
        <Router />
      </header>
    </div>
  );
}

export default App;
