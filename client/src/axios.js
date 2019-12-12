import axios from "axios";

const instance = axios.create({
    baseURL: "http://nodejs-mongo-backend-vuori.rahtiapp.fi/"
    //baseURL: "http://localhost:9000/"
});

export default instance;