import axios from 'axios';

async function getAccesstoken(){
    return axios.get('/')
    .then((response)=>{
        return response.data;
    })
    .catch((err)=>{
        console.log(err);
    })
}

const client = {getAccesstoken}

export default client;