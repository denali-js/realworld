import { Errors, inject } from 'denali';
import ApplicationAction from '../application';
import { hash } from 'bcryptjs';
import { fromNode } from 'bluebird';

export default class CreateUser extends ApplicationAction {

  protect = false;

  config = inject('config:environment');

  async respond({ body }) {
    let hashedPassword = await this.hashPassword(body.password);
    let user = await this.db.queryOne('user', {
      email: body.email,
      hashedPassword
    });
    if (!user) {
      throw new Errors.Unauthorized('Invalid credentials');
    }
    await user.generateToken();
    return user;
  }

  async hashPassword(password) {
    return await fromNode((cb) => hash(password, this.config.passwordStretches, cb));
  }

}
