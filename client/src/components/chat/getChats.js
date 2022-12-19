import axios from 'axios';

const getUsers = () => {
    return axios.get('http://localhost:8000/chats')
}

export default getUsers;