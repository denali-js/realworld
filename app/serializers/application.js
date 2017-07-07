import { FlatSerializer, Model } from 'denali';
import { pluralize } from 'inflection';

export default class ApplicationSerializer extends FlatSerializer {

  serialize(action, body, options) {
    let result = super.serialize(action, body, options);
    if (body instanceof Model) {
      result = {
        [body.type]: result
      };
    } else if (Array.isArray(body) && body[0] instanceof Model) {
      result = {
        [pluralize(body.type)]: result
      };
    }
    return result;
  }

}
