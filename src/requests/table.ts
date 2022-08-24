import api from '../../lib/api';

export const loadList = async () => {
  const { data } = await api.get(`api/list?limit=500`);
  return data;
};
