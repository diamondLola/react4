import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav";
import CreatePage from "./pages/create";
import HomePage from "./pages/home";
import SinglePage from "./pages/single";
import UpdatePage from "./pages/update";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<SinglePage />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
