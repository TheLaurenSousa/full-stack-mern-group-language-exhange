import axios from 'axios';

const getUserInfo = (userId) => {
    return axios.get(`http://localhost:8000/user/${userId}`);
}

export default getUserInfo;