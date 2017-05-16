import { attr } from 'denali';
import ApplicationModel from './application';

export default class Tag extends ApplicationModel {

  static name = attr('text');

}
