import axios from 'axios';

const getUsers = () => {
    return axios.get('http://localhost:8000/users')
}

export default getUsers;