import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import { useState } from "react";
import ShowLoader from "./Components/ShowLoader";

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <>
      <BrowserRouter>
        {loading ? <ShowLoader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
