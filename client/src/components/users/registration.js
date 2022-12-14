import axios from 'axios';

const registrationProcess = (user) => {
    return axios.post('http://localhost:8000/user/create', user)
}

export default registrationProcess;