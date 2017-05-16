import { Action, Errors } from 'denali';

export default class ApplicationAction extends Action {

  before = 'authenticate';

  protect = true;

  authenticate({ headers }) {
    if (headers.Authorization) {
      let [ scheme, token ] = headers.Authorization.split(' ');
      if (scheme !== 'Token') {
        throw new Errors.BadRequest('Invalid authorization scheme - only "Token" is supported');
      }
      this.currentUser = this.db.queryOne('user', { token });
      if (this.protect && !this.currentUser) {
        throw new Errors.Unauthorized('Invalid authorization token');
      }
    }
  }

}
