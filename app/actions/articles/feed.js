import ApplicationAction from '../application';

export default class ListArticles extends ApplicationAction {

  async respond() {
    return this.db.query('article', (knex) => {
      // query for articles from followed authors, sorted by most recent first, with limit and offset
    });
  }

}
