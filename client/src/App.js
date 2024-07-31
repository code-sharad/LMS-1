import React from "react";
import NewRoute from "./Routes/NewRoute";
import AdminRoute from "./Routes/AdminRoute";
import StudentRoute from "./Routes/StudentRoutes";
import TeacherRoutes from "./Routes/TeacherRoutes";

import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <NewRoute />
      <StudentRoute />
      <TeacherRoutes />
      <Routes>
        <Route path="/admin" element={<AdminRoute />}/>
      </Routes>

    </div>
  );
}

export default App;
