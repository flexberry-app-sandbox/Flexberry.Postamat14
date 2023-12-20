import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat14-регистр-хран', 'Unit | Model | i-i-s-postamat14-регистр-хран', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat14-ключ',
    'model:i-i-s-postamat14-логистика',
    'model:i-i-s-postamat14-пользователь',
    'model:i-i-s-postamat14-постамат',
    'model:i-i-s-postamat14-посылка',
    'model:i-i-s-postamat14-регистр-посылки',
    'model:i-i-s-postamat14-регистр-хран',
    'model:i-i-s-postamat14-служба-доставки',
    'model:i-i-s-postamat14-уведомление',
    'model:i-i-s-postamat14-хранение',
    'model:i-i-s-postamat14-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
