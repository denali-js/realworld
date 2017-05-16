import ApplicationAction from '../application';

export default class FollowProfile extends ApplicationAction {

  async respond({ params }) {
    let profile = await this.db.queryOne('profile', { username: params.username });
    let follow = await this.db.create('follow', { profile, user: this.currentUser }).save();
    await profile.addFollow(follow);
    return profile;
  }

}
