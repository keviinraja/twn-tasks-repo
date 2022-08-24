import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValueLoadable } from 'recoil';
import { defaultArticleSelector, defaultArticleSlugAtom } from '../../recoil/article';
import './styles/Article.scss';

const Article = () => {
  const articleLoadable = useRecoilValueLoadable(defaultArticleSelector);
  const [slugAtom, setSlugAtom] = useRecoilState(defaultArticleSlugAtom);
  const { contents } = articleLoadable;

  const params = useParams();

  useEffect(() => {
    if (params.slug === slugAtom) {
      return;
    }
    setSlugAtom(params.slug);
  }, []);

  let intro;
  if (contents.intro) {
    intro = (
      <div
        className="page-article__intro"
        dangerouslySetInnerHTML={{ __html: contents.intro }}
      ></div>
    );
  }

  let image;
  if (contents.image) {
    image = (
      <figure className="page-article__image">
        <img src={contents.image.small} alt={contents.image.alt} title={contents.image.title} />
        <div className="page-article__fade">
          <div
            className="page-article__fade__image"
            style={{
              backgroundImage: 'url(' + contents.image.large + ')',
            }}
          ></div>
        </div>
        <div
          className="page-article__face"
          style={{ backgroundImage: 'url(' + contents.image.small + ')' }}
        ></div>
        {contents.image.title && (
          <figcaption className="page-article__image__title">{contents.image.title}</figcaption>
        )}
      </figure>
    );
  }

  let body;
  if (contents.body) {
    body = (
      <div className="page-article__body" dangerouslySetInnerHTML={{ __html: contents.body }}></div>
    );
  }

  let tags;
  if (contents.tags) {
    tags = (
      <ul className="page-article__tags">
        {contents.tags &&
          contents.tags.map((tag: string, index: number) => {
            return (
              <li key={index} className="page-article__tag">
                {tag}
              </li>
            );
          })}
      </ul>
    );
  }

  return (
    <div className="page-article">
      <h1>{contents.title && contents.title}</h1>
      {intro}
      {image}
      {body}
      {tags}
    </div>
  );
};

export default Article;
