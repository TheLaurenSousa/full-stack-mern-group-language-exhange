import axios from 'axios';

const getChatMessages = (chatId) => {
    return axios.get(`http://localhost:8000/message/${chatId}`);
}
export default getChatMessages;