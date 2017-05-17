import ApplicationAction from '../../application';

export default class ListComments extends ApplicationAction {

  protect = false;

  async respond({ params }) {
    let article = this.db.queryOne('article', { slug: params.slug });
    return article.getComments();
  }

}
