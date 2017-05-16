import ApplicationAction from '../application';

export default class UpdateUser extends ApplicationAction {

  async respond({ body }) {
    Object.assign(this.currentUser, body);
    return this.currentUser.save();
  }

}
