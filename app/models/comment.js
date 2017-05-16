import { attr, hasOne } from 'denali';
import ApplicationModel from './application';

export default class Comment extends ApplicationModel.mixin(Timestamps) {

  static body = attr('text');

  static author = hasOne('profile');

}
