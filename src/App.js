import { ToastContainer } from "react-toastify";
import "./App.css";
import Contact from "./components/shared/Contact";
import Header from "./components/shared/Header";
import "./common.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/shared/About";
import Footer from "./components/shared/Footer";

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
        <About />
        <Contact />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
