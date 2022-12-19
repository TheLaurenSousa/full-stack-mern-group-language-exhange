import axios from 'axios';

const getChatInfo = (chatId) => {
    return axios.get(`http://localhost:8000/chat/${chatId}`);
}
export default getChatInfo;