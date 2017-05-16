import { attr /* , hasOne, hasMany */ } from 'denali';
import ApplicationModel from './application';

export default class User extends ApplicationModel {

  static email = attr('text');
  static token = attr('text');
  static username = attr('text');
  static bio = attr('text');
  static image = attr('text');

  generateToken() {
    // ...
  }

}
