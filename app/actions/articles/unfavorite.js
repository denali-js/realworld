import ApplicationAction from '../application';

export default class ListArticles extends ApplicationAction {

  async respond({ params }) {
    let article = this.db.queryOne('article', { slug: params.id });
    let favorite = await this.db.queryOne('favorite', { user: this.currentUser, article });
    await article.removeRelated(favorite);
    await favorite.destroy();
    return article;
  }

}
