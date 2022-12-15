import axios from 'axios';

const createChat = (chat) => {
    return axios.post('http://localhost:8000/chat/create', chat)
}

export default createChat;