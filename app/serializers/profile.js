import ApplicationSerializer from './application';

export default class ProfileSerializer extends ApplicationSerializer {

  attributes = [
    'username',
    'bio',
    'image'
  ];

  relationships = {};

}
