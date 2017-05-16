import ApplicationAction from '../application';

export default class ListArticles extends ApplicationAction {

  protect = false;

  async respond() {
    return this.db.all('article');
  }

}
