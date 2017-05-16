import { attr, hasOne } from 'denali';
import ApplicationModel from './application';

export default class Article extends ApplicationModel.mixin(Timestamps) {

  static slug = attr('text');
  static title = attr('text');
  static description = attr('text');
  static body = attr('text');
  static favoritesCount = attr('number');

  static author = hasOne('profile');


}
