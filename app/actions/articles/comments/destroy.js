import ApplicationAction from '../application';

export default class DestroyComment extends ApplicationAction {

  async respond({ params }) {
    let comment = await this.db.find('comment', params.id);
    await comment.delete();
    this.render(204);
  }

}
