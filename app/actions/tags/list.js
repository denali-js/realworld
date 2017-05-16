import ApplicationAction from '../application';

export default class ListTags extends ApplicationAction {

  protect = false;

  async respond() {
    return this.db.all('tag');
  }

}
