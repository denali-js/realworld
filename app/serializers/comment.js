import ApplicationSerializer from './application';

export default class CommentSerializer extends ApplicationSerializer {

  attributes = [
    'body'
  ];

  relationships = {
    author: {}
  };

}
