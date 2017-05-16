import { Errors } from 'denali';
import ApplicationAction from '../application';

export default class DestroyArticle extends ApplicationAction {

  async respond({ params }) {
    let article = await this.db.queryOne({ slug: params.id });
    let author = await article.getAuthor();
    let myProfile = await this.currentUser.getProfile();
    if (author !== myProfile) {
      throw new Errors.Forbidden();
    }
    await article.delete();
    this.render(204);
  }

}
