import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminPanel from "./panels/AdminPanel";
import InstructorPanel from "./panels/InstructorPanel";
import AddForm from "./components/AddForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/instructorpanel" element={<InstructorPanel />} />
        <Route
          path="/addInstructor"
          element={<AddForm instructor={true} course={false} />}
        />
        <Route
          path="/addCourse"
          element={<AddForm course={true} instructor={false} />}
        />
        <Route path="/" element={<AdminPanel />} exact />
      </Routes>
    </Router>
  );
}

export default App;
