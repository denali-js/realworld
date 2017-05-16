import ApplicationAction from '../application';

export default class ShowUser extends ApplicationAction {

  async respond() {
    return this.currentUser;
  }

}
