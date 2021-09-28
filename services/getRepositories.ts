import axios, { AxiosResponse } from 'axios';

type TState = {
  data: {} | undefined | null;
  status: number | undefined | null;
};

export function getData(user: string): Promise<any | AxiosResponse<TState>[]> {
  const baseAPi = axios.create({
    baseURL: 'https://api.github.com/users',
  });
  const getUser = baseAPi.get(`/${user}`);
  const listRepository = baseAPi.get(`/${user}/repos`);
  return axios
    .all([getUser, listRepository])
    .then(
      axios.spread((...data) => [
        {
          user: data[0].data,
          status: data[0].status,
        },
        {
          repos: data[1].data,
          status: data[1].status,
        },
      ])
    )
    .catch(err => console.log(`whoops was happen a wrong: ${err}`));
}
