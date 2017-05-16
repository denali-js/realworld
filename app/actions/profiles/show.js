import ApplicationAction from '../application';

export default class ShowProfile extends ApplicationAction {

  protect = false;

  async respond({ params }) {
    return this.db.queryOne('profile', { username: params.username });
  }

}
