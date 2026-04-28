import { axios } from "../../services/axios/axiosConfig";

type Credentials = {
  username: string;
  password: string;
};

const signIn = ({ username, password }: Credentials) => {
  return axios.post<{
    item1: string;
    item2: number;
  }>("/Public/UI/GetJwtToken", {
    Username: encodeURIComponent(username),
    Password: encodeURIComponent(password),
  });
};

export { signIn };
