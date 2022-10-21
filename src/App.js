import { ToastContainer } from "react-toastify";
import "./App.css";
import Contact from "./components/shared/Contact";
import Header from "./components/shared/Header";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <div className="app-body">
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
