import axios from "axios";
// 서비스 삭제
export default function deleteService(id) {
  return axios
    .delete(`/team4/vercontrol/config/${id}`, {
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

