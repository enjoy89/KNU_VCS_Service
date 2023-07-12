import axios from "axios";
export default function getVersionInfo(inputInfo) {
    console.log(inputInfo)
   return axios.post('/team4/vercontrol/config', inputInfo).then((res) => {
        console.log(res)
    return res;
}).catch((err) => {
    console.log(err);
})
}