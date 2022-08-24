import api from '../../lib/api';

export const loadArticle = async (slug: string) => {
  const { data } = await api.get(`api/list/${slug}`);
  return data;
};
