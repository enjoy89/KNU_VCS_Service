import axios from "axios";
// 서비스 등록
export default function addService(inputInfo) {
  return axios
    .post("/team4/vercontrol/config", inputInfo, {
      headers: {
        serviceKey: process.env.REACT_APP_API_KEY,
      },
    })
    .then((res) => {
      console.log(res);
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}
