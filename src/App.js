import "./App.css";
import "./common.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css/animate.min.css";
import { ToastContainer } from "react-toastify";
import Contact from "./components/shared/Contact";
import Header from "./components/shared/Header";
import About from "./components/shared/About";
import Footer from "./components/shared/Footer";
import Skills from "./components/shared/Skills";

function App() {
  return (
    <div className="App container">
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
        <Skills />
        <Contact />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
