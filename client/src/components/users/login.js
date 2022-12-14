import axios from 'axios';

const loginProcess = (user) => {
    return axios.post('http://localhost:8000/login', user)
}

export default loginProcess;