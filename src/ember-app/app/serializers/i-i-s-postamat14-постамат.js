import { Serializer as ПостаматSerializer } from
  '../mixins/regenerated/serializers/i-i-s-postamat14-постамат';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПостаматSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
