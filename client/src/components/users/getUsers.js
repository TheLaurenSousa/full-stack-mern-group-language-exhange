import axios from 'axios';

const getUsers = () => {
    const listOfUsers = [];
    axios.get('http://localhost:8000/users')
        .then((res) => {
            const userData = res.data
            for (const key of Object.keys(userData)) {
                listOfUsers.push({id: userData[key]._id, username: userData[key].username})
            }
        })
        .catch((err) => console.log(err));
    return listOfUsers;
}

export default getUsers;