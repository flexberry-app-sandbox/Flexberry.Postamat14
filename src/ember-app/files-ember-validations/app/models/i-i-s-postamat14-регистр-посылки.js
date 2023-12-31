import {
  defineNamespace,
  defineProjections,
  Model as РегистрПосылкиMixin
} from '../mixins/regenerated/models/i-i-s-postamat14-регистр-посылки';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РегистрПосылкиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
