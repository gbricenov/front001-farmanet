import axios from 'axios';

let FarmanetAxios = axios.create({
    defaultInterceptors: true,
    headers: { "Access-Control-Allow-Origin": "*" },
});

export {
    FarmanetAxios
};