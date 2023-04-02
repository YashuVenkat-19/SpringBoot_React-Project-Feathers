import AddBirdForm from "./AddBirdForm";
import AllBirds from "./AllBirds";
import UpdateBird from "./UpdateBird";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route exact path="/" element={<AllBirds />}></Route>
          <Route exact path="/addbirds" element={<AddBirdForm />}></Route>
          <Route exact path="/getbirds" element={<AllBirds />}></Route>
          <Route exact path="/updatebird/:id" element={<UpdateBird />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
