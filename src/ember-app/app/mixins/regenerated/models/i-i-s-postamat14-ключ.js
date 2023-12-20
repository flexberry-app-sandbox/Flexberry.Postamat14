import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сгенКлюч: DS.attr('number'),
  пользователь: DS.belongsTo('i-i-s-postamat14-пользователь', { inverse: null, async: false }),
  посылка: DS.belongsTo('i-i-s-postamat14-посылка', { inverse: null, async: false })
});

export let ValidationRules = {
  сгенКлюч: {
    descriptionKey: 'models.i-i-s-postamat14-ключ.validations.сгенКлюч.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пользователь: {
    descriptionKey: 'models.i-i-s-postamat14-ключ.validations.пользователь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  посылка: {
    descriptionKey: 'models.i-i-s-postamat14-ключ.validations.посылка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлючE', 'i-i-s-postamat14-ключ', {
    сгенКлюч: attr('Сген ключ', { index: 0 }),
    посылка: belongsTo('i-i-s-postamat14-посылка', 'Посылка', {
      номер: attr('Номер', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'номер' }),
    пользователь: belongsTo('i-i-s-postamat14-пользователь', 'Пользователь', {
      фИО: attr('ФИО', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('КлючL', 'i-i-s-postamat14-ключ', {
    сгенКлюч: attr('Сген ключ', { index: 0 }),
    посылка: belongsTo('i-i-s-postamat14-посылка', 'Номер', {
      номер: attr('Номер', { index: 1 })
    }, { index: -1, hidden: true }),
    пользователь: belongsTo('i-i-s-postamat14-пользователь', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
