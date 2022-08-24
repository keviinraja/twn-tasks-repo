import { selector, atom } from 'recoil';
import { loadArticle } from '../requests/article';

export const defaultArticleSlugAtom = atom({
  key: 'defaultArticleSlugAtom',
  default: '',
});

export const defaultArticleSelector = selector({
  key: 'defaultArticleSelector',
  get: async ({ get }) => {
    const slug: string = get(defaultArticleSlugAtom);
    return await loadArticle(slug);
  },
});
