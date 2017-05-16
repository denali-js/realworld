import ApplicationSerializer from './application';

export default class ArticleSerializer extends ApplicationSerializer {

  attributes = [
    'slug',
    'title',
    'description',
    'body',
    'favoritesCount'
  ];

  relationships = {
    author: {}
  };

}
