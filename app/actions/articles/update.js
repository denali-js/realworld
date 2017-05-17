import ApplicationAction from '../application';
import OwnArticles from './-own-articles';

export default class UpdateArticle extends ApplicationAction.mixin(OwnArticles) {

  async respond({ body }) {
    Object.assign(this.article, body);
    return this.article.save();
  }

}
