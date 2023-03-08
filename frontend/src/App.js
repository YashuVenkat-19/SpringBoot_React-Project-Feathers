import "./App.css";
import Navbar from "./Components/Navbar";
import InstituteList from "./Components/InstituteList";
import AddInstitute from "./Components/AddInstitute";
import UpdateInstitute from "./Components/UpdateInstitute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<InstituteList />}></Route>
          <Route path="/" element={<InstituteList />}></Route>
          <Route path="/instituteList" element={<InstituteList />}></Route>
          <Route path="/addInstitute" element={<AddInstitute />}></Route>
          <Route
            path="/editInstitute/:collegeId"
            element={<UpdateInstitute />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
