import axios from 'axios';

const createMessage = (message) => {
    return axios.post('http://localhost:8000/message/create', message)
}

export default createMessage;