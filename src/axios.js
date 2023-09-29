import axios from "axios";

export default axios.create({
    baseURL: 'https://hybrid-reader-api-a8090dbe659a.herokuapp.com/api/'
});