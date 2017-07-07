import { attr, inject } from 'denali';
import ApplicationModel from './application';
import { hash } from 'bcryptjs';
import { fromNode } from 'bluebird';

export default class User extends ApplicationModel {

  static email = attr('text');
  static hashedPassword = attr('text');
  static token = attr('text');
  static username = attr('text');
  static bio = attr('text');
  static image = attr('text');

  config = inject('config:environment');

  generateToken() {
    this.token = Math.random().toString();
  }

  save(...args) {
    let save = super.save;
    if (this.password) {
      return this.hashPassword().then(() => save.call(this, ...args));
    }
    return save.call(this, ...args);
  }

  async hashPassword() {
    this.hashedPassword = await fromNode((cb) => hash(this.password, this.config.passwordStretches, cb));
    delete this.password;
  }

}
