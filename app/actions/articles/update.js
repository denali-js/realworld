import ApplicationAction from '../application';

export default class UpdateArticle extends ApplicationAction {

  async respond({ body, params }) {
    let article = await this.db.queryOne('article', { slug: params.id });
    Object.assign(article, body);
    return article.save();
  }

}
