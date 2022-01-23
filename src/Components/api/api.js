import axios from 'axios';

const req = async(obj) => {
    console.log("ok")
    const res = await axios.post("https://api.quinn.care/graph",obj);
    return res;
}

export default req;