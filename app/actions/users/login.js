import { Errors } from 'denali';
import ApplicationAction from '../application';

export default class CreateUser extends ApplicationAction {

  protect = false;

  async respond({ body }) {
    let hashedPassword = await this.hashPassword(body.password);
    let user = await this.db.queryOne('user', {
      email: body.email,
      password: hashedPassword
    });
    if (!user) {
      throw new Errors.Unauthorized('Invalid credentials');
    }
    await user.generateToken();
    return user;
  }

  async hashPassword(password) {
    // ...
  }

}
