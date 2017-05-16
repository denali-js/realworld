import { Response } from 'denali';
import ApplicationAction from '../application';

export default class CreateUser extends ApplicationAction {

  protect = false;

  async respond({ body }) {
    return await this.db.create('user', body).save();
  }

}
