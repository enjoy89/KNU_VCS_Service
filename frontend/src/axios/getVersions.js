import axios from "axios";

// 버전 정보 전체 리스트를 가져온다.
export default function getVersions() {
  return axios
    .get("/team4/vercontrol/configs", {
      headers: {
        numOfRows: "10",
        serviceKey: process.env.REACT_APP_API_KEY,
      },
    })
    .then((res) => {
      console.log(res.data.configs);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

