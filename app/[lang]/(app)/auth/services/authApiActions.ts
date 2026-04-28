import { axios } from "../../services/axios/axiosConfig";

type WithPasswordCredentials = {
  userName: string;
  password: string;
};

const signInWithPassword = ({
  userName,
  password,
}: WithPasswordCredentials) => {
  return axios.post<{
    item1: string;
    item2: number;
  }>("/Public/UI/GetJwtToken", {
    Username: encodeURIComponent(userName),
    Password: encodeURIComponent(password),
  });
};

export type { WithPasswordCredentials };
export { signInWithPassword };
