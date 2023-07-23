import axios from "axios";
// 입력 값에 해당하는 버전 정보(최신 버전 여부, 강제 업데이트 여부)를 받아온다.
export default function getVersionInfo(inputInfo) {
  console.log(process.env.REACT_APP_API_KEY);
  return axios
    .post("/team4/vercontrol/config-details", inputInfo, {
      headers: {
        serviceKey: process.env.REACT_APP_API_KEY,
      },
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

