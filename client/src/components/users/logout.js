import axios from 'axios';

const logoutProcess = (user) => {
    return axios.get('http://localhost:8000/logout')
}

export default logoutProcess;