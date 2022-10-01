import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import UploadVideoPage from "./pages/UploadVideo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadVideoPage />} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
