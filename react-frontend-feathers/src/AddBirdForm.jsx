import React from "react";
import BirdService from "./Service/BirdService";
import { useState } from "react";
import NavBar from "./NavBar";
import "./addbird.css";

const AddBirdForm = () => {
  const initialState = {
    birdname: "",
    birdcolor: "",
    birdheight: 0,
    sanctuarystate: "",
    sanctuaryname: "",
    birdcount: 0,
    habitat: "",
  };

  const [bird, setBird] = useState(initialState);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    BirdService.addBird(bird).catch((error) => console.log(error));
    window.alert("Submitted!");
    // console.log("Submitted");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBird({ ...bird, [name]: value });
  };

  return (
    <div>
      <NavBar />
      <div className="form">
        <h2>Add new bird:</h2>
        <form onSubmit={handleSubmitForm} action="default">
          <label className="he">Name of the bird:</label>
          <input
            className="inputfield"
            name="birdname"
            id="birdname"
            placeholder="name"
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Colors of the bird:</label>
          <input
            name="birdcolor"
            className="inputfield"
            id="birdcolor"
            placeholder="color"
            onChange={handleInputChange}
          />

          <br></br>
          <label className="he">Height of the bird:</label>

          <input
            name="birdheight"
            className="inputfield"
            id="birdheight"
            placeholder="height"
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Sanctuary bird present at:</label>

          <input
            name="sanctuaryname"
            className="inputfield"
            id="sanctuaryname"
            placeholder="san name"
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">State of Sanctuary::</label>

          <input
            name="sanctuarystate"
            className="inputfield"
            id="sanctuarystate"
            placeholder="san state"
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Birdcount:</label>
          <input
            name="birdcount"
            className="inputfield"
            id="birdcount"
            placeholder="count"
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Habitat of the bird:</label>

          <input
            name="habitat"
            className="inputfield"
            id="habitat"
            placeholder="habitat"
            onChange={handleInputChange}
          />
          <br></br>
          <button
            type="submit"
            className="submitbutton"
            onSubmit={handleSubmitForm}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBirdForm;
