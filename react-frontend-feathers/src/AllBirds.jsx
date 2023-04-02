import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import BirdService from "./Service/BirdService";
import NavBar from "./NavBar";
import "./allbirds.css";

const AllBirds = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      try {
        const response = await BirdService.getAllBirds();
        setBirdState(response.data);
        console.log(response.data.birdname);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchbird();
  }, []);

  const handleEditBird = (e, id) => {
    e.preventDefault();
    navigate(`/updatebird/${id}`);
    console.log(id);
  };

  const handleDeleteBird = (e, id) => {
    e.preventDefault();
    BirdService.deleteById(id).then((response) => {
      console.log("hello allbirds");
      console.log(response);
      if (birdState) {
        setBirdState((prevBird) => {
          return prevBird.filter((bird) => {
            return bird.id !== id;
          });
        });
      }
    });
  };

  return (
    <>
      <NavBar />
      <div className="birdtable">
        <h3>List of all Birds</h3>
        <table cellSpacing={0} border={1} cellPadding={3}>
          <thead>
            <tr>
              <th className="tableheader">Id</th>
              <th className="tableheader">Bird Name</th>
              <th className="tableheader">Bird Color</th>
              <th className="tableheader">Bird height</th>
              <th className="tableheader">Sanctuary Name</th>
              <th className="tableheader">Sanctuary State</th>
              <th className="tableheader">Bird Count</th>
              <th className="tableheader">Habitat</th>
              <th className="tableheader">Edit</th>
              <th className="tableheader">Delete</th>
            </tr>
          </thead>
          {!loading && (
            <tbody>
              {birdState.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{b.birdname}</td>
                  <td>{b.birdcolor}</td>
                  <td>{b.birdheight}</td>
                  <td>{b.sanctuaryname}</td>
                  <td>{b.sanctuarystate}</td>
                  <td>{b.birdcount}</td>
                  <td>{b.habitat}</td>
                  <td>
                    <div onClick={(e) => handleEditBird(e, b.id)}>
                      <FaEdit />
                    </div>
                  </td>
                  <td>
                    <div onClick={(e) => handleDeleteBird(e, b.id)}>
                      <FaTrashAlt />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default AllBirds;
