import "./App.css";
import Header from "./component/Header";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

