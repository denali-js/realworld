import { FlatParser } from 'denali';

export default class ApplicationParser extends FlatParser {

  parse(request) {
    return {
      body: this.unwrapRoot(request.body),
      query: request.query,
      headers: request.headers,
      params: request.params
    };
  }

  unwrapRoot(body) {
    let rootKey = Object.keys(body)[0];
    return body[rootKey];
  }

}
