import axios from "axios";

const api_url = "http://localhost:8080/";

class BirdService {
  getAllBirds() {
    return axios.get(api_url + "get");
  }
  getBirdById(id) {
    return axios.get(api_url + "get/" + id);
  }

  addBird(bird) {
    // console.log(bird);
    const response = axios.post(api_url + "add", bird);
    return response;
  }

  deleteById(id) {
    return axios.delete(api_url + "delete/" + id);
  }

  updateBird(id, bird) {
    console.log(id);
    console.log(bird);
    return axios.put(api_url + "update/" + id, bird);
  }
}

const sam = new BirdService();
export default sam;
