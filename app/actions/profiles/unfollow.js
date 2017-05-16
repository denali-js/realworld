import ApplicationAction from '../application';

export default class ShowProfile extends ApplicationAction {

  protect = false;

  async respond(params) {
    let profile = await this.db.queryOne('profile', { username: params.username });
    let follow = this.db.queryOne('follow', { profile, user: this.currentUser });
    profile.removeFollow(follow);
    follow.delete();
    return profile;
  }

}
