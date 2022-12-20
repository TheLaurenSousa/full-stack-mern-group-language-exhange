import axios from 'axios';

const deleteChat = (chatId) => {
    return axios.delete(`http://localhost:8000/chat/delete/${chatId}`)
}

export default deleteChat;