import ApplicationAction from '../application';

export default class CreateArticle extends ApplicationAction {

  async respond({ body }) {
    let article = await this.db.create('article', body);
    this.render(201, article);
  }

}
