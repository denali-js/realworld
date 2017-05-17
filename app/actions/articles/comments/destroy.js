import { Errors } from 'denali';
import ApplicationAction from '../../application';

export default class DestroyComment extends ApplicationAction {

  async respond({ params }) {
    let comment = await this.db.find('comment', params.id);
    let author = await comment.getAuthor();
    let myProfile = await this.currentUser.getProfile();
    if (author !== myProfile) {
      throw new Errors.Forbidden();
    }
    await comment.delete();
    this.render(204);
  }

}
