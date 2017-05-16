import { attr } from 'denali';
import ApplicationModel from './application';

export default class Profile extends ApplicationModel {

  static username = attr('text');
  static bio = attr('text');
  static image = attr('text');

}
