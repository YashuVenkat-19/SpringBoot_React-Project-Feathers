import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InstituteService from "../Service/InstituteService";

function UpdateInstitute() {
  const { collegeId } = useParams();
  const navigate = useNavigate();
  const [institute, setInstitute] = useState({
    collegeId: collegeId,
    ceo: "",
    collegeName: "",
    graduationOutcome: "",
    nirfRank: "",
    performance: "",
    professionalPractice: "",
    research: "",
    teaching: "",
  });

  useEffect(() => { 
    const fetchData = async () => {
      try {
        const response = await InstituteService.getDetailsById(collegeId);
        setInstitute(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const updateInstitute = (e) => {
    e.preventDefault();
    InstituteService.updateInstitute(institute, collegeId)
      .then((response) => {
        navigate("/instituteList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setInstitute((prevItems) => {
      return { ...prevItems, [name]: value };
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Institute</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">Id</label>
          <input
            type="text"
            name="collegeId"
            value={institute.collegeId}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Name
          </label>
          <input
            type="text"
            name="collegeName"
            value={institute.collegeName}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Chairperson
          </label>
          <input
            type="text"
            name="ceo"
            value={institute.ceo}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Performance
          </label>
          <input
            type="text"
            name="performance"
            value={institute.performance}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Research
          </label>
          <input
            type="text"
            name="research"
            value={institute.research}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Teaching
          </label>
          <input
            type="text"
            name="teaching"
            value={institute.teaching}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Graduation_Outcome
          </label>
          <input
            type="text"
            name="graduationOutcome"
            value={institute.graduationOutcome}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Professional_Practice
          </label>
          <input
            type="text"
            name="professionalPractice"
            value={institute.professionalPractice}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Rank
          </label>
          <input
            type="text"
            name="nirfRank"
            value={institute.nirfRank}
            onChange={handleChange}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateInstitute}
            className="rounded text-white font-semibold bg-green-400 py-2 px-5 hover:bg-green-700"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/instituteList")}
            className="rounded text-white font-semibold bg-red-400 py-2 px-5 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateInstitute;
