import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import ReadPage from "./pages/ReadPage";
import CreatePage from "./pages/CreatePage";
import UpdatePage from "./pages/UpdatePage";

function App() {
  return (
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<ReadPage />} />
                  <Route path="/create" element={<CreatePage />} />
                  <Route path="/update/:id" element={<UpdatePage />} />
              </Routes>
          </BrowserRouter>
  );
}

export default App;









