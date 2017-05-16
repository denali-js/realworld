import ApplicationAction from '../application';

export default class FavoriteArticle extends ApplicationAction {

  async respond({ params }) {
    let article = await this.db.queryOne({ slug: params.id });
    let favorite = await this.db.create('favorite', { user: this.currentUser, article }).save();
    await article.addFavorite(favorite);
    return article;
  }

}
