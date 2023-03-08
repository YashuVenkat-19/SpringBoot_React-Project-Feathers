import Institute from "./Institute";
import InstituteService from "../Service/InstituteService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function InstituteList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [institutes, setInstitutes] = useState({
    collegeId: "",
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
    const fetchdata = async () => {
      setLoading(true);
      try {
        const response = await InstituteService.getAllDetails();
        setInstitutes(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    fetchdata();
  }, []);

  const deleteInstitute = (e, collegeId) => {
    e.preventDefault();
    InstituteService.deleteById(collegeId).then((response) => {
      console.log(response);
      if (institutes) {
        setInstitutes((prevElements) => {
          return prevElements.filter((institute) => {
            return institute.collegeId !== collegeId;
          });
        });
      }
    });
  };
  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addInstitute")}
          className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
        >
          Add Institute
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Id
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Name
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Chairperson
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Performance
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Professional_Practice
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Graduation_Outcome
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Teaching
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Research
              </th>
              <th className="text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Rank
              </th>
              <th className="text-right font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {institutes.map((institute) => (
                <Institute
                  institute={institute}
                  key={institute.collegeId}
                  deleteInstitute={deleteInstitute}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
