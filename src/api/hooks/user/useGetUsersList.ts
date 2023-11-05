import {API_ENPOINTS} from '../../api-endpoint';

import {useQuery} from 'react-query';
import makeAxiosRequest from '../../makeAxiosRequest';

const handleData = async (page: number) => {
  const api = `${API_ENPOINTS.USER.USERS_LIST}?page=${page}`;
  const response = await makeAxiosRequest(api, 'GET');
  return response;
};

export const useGetUsersList = (page: number) => {
  const {refetch, data, isLoading} = useQuery('get-users-list', () =>
    handleData(page)
  );
  return {refetch, data, isLoading};
};
