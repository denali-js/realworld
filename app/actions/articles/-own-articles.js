import { createMixin, Errors } from 'denali';

export default createMixin((BaseAction) =>
  class IsOwnArticle extends BaseAction {

    before = 'ensureOwnArticle';

    async ensureOwnArticle({ params }) {
      this.article = await this.db.queryOne('article', { slug: params.id });
      this.author = await this.article.getAuthor();
      this.myProfile = await this.currentUser.getProfile();
      if (this.author !== this.myProfile) {
        throw new Errors.Forbidden();
      }
    }

  }
);
