import axios from "axios";

const Url = "http://localhost:8080";

class InstituteService {
  getAllDetails() {
    return axios.get(Url + "/get");
  }
  getDetailsById(collegeId) {
    return axios.get(Url + "/get/" + collegeId);
  }
  deleteById(collegeId) {
    return axios.delete(Url + "/del/" + collegeId);
  }
  saveInstitute(institute) {
    console.log(institute);
    return axios.post(Url + "/post", institute);
  }
  updateInstitute(institute, collegeId) {
    console.log("hi college id");
    return axios.put(Url + "/put/" + collegeId, institute);
  }
}
const obj = new InstituteService();
export default obj;
