import ApplicationSerializer from './application';

export default class UserSerializer extends ApplicationSerializer {

  attributes = [
    'email',
    'token',
    'username',
    'bio',
    'image'
  ];

  relationships = {};

}
