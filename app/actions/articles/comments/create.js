import ApplicationAction from '../application';

export default class CreateComment extends ApplicationAction {

  async respond({ body, params }) {
    let article = await this.db.queryOne('article', { slug: params.slug });
    let comment = await this.db.create('comment', body);
    await article.addComment(comment);
    return comment;
  }

}
