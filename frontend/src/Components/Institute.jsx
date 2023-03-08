import { useNavigate } from "react-router-dom";

function Institute({ institute, deleteInstitute }) {
  const navigate = useNavigate();

  const editInstitute = (e, collegeId) => {
    e.preventDefault();
    console.log(collegeId);
    navigate(`/editInstitute/${collegeId}`);
  };

  return (
    <tr key={institute.collegeId}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{institute.collegeId}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{institute.collegeName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{institute.ceo}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{institute.performance}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{institute.teaching}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {institute.graduationOutcome}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{institute.research}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">
          {institute.professionalPractice}
        </div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{institute.nirfRank}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium">
        <a
          onClick={(e) => editInstitute(e, institute.collegeId)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteInstitute(e, institute.collegeId)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
}

export default Institute;
