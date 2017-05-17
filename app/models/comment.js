import { attr, hasOne } from 'denali';
import ApplicationModel from './application';
import Timestamps from './-timestamps';

export default class Comment extends ApplicationModel.mixin(Timestamps) {

  static body = attr('text');

  static author = hasOne('profile');

}
