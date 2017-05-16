import ApplicationAction from '../application';

export default class ShowArticle extends ApplicationAction {

  protect = false;

  async respond({ params }) {
    return this.db.queryOne({ slug: params.id });
  }

}
