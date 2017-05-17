import ApplicationAction from '../application';
import OwnArticles from './-own-articles';

export default class DestroyArticle extends ApplicationAction.mixin(OwnArticles) {

  async respond() {
    await this.article.delete();
    this.render(204);
  }

}
