import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import BirdService from "./Service/BirdService";
import NavBar from "./NavBar";

const UpdateBird = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [birdState, setBirdState] = useState({
    birdname: "",
    birdcolor: "",
    birdheight: 0,
    sanctuarystate: "",
    sanctuaryname: "",
    birdcount: 0,
    habitat: "",
  });

  useEffect(() => {
    const fetchbird = async () => {
      try {
        const response = await BirdService.getBirdById(id);
        setBirdState(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchbird();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBirdState({ ...birdState, [name]: value });
  };

  const handleUpdateBird = (e) => {
    e.preventDefault();
    BirdService.updateBird(id, birdState)
      .then((response) => {
        // console.log(response);
        navigate("/getbirds");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("updated");
  };

  return (
    <div>
      <NavBar />
      <div className="form">
        <h2>Update bird {birdState.birdname}</h2>
        <form onSubmit={handleUpdateBird} action="default">
          <label className="he">Name of the bird:</label>
          <input
            className="inputfield"
            name="birdname"
            id="birdname"
            placeholder={birdState.birdname}
            value={birdState.birdname}
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Colors of the bird:</label>
          <input
            name="birdcolor"
            className="inputfield"
            id="birdcolor"
            placeholder={birdState.birdcolor}
            value={birdState.birdcolor}
            onChange={handleInputChange}
          />

          <br></br>
          <label className="he">Height of the bird:</label>

          <input
            name="birdheight"
            className="inputfield"
            id="birdheight"
            placeholder={birdState.birdheight}
            value={birdState.birdheight}
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Sanctuary bird present at:</label>

          <input
            name="sanctuaryname"
            className="inputfield"
            id="sanctuaryname"
            placeholder={birdState.sanctuaryname}
            value={birdState.sanctuaryname}
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">State of Sanctuary::</label>

          <input
            name="sanctuarystate"
            className="inputfield"
            id="sanctuarystate"
            placeholder={birdState.sanctuarystate}
            value={birdState.sanctuarystate}
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Birdcount:</label>
          <input
            name="birdcount"
            className="inputfield"
            id="birdcount"
            placeholder={birdState.birdcount}
            value={birdState.birdcount}
            onChange={handleInputChange}
          />
          <br></br>
          <label className="he">Habitat of the bird:</label>

          <input
            name="habitat"
            className="inputfield"
            id="habitat"
            placeholder={birdState.habitat}
            value={birdState.habitat}
            onChange={handleInputChange}
          />
          <br></br>
          <button
            type="submit"
            className="submitbutton"
            onSubmit={handleUpdateBird}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBird;
