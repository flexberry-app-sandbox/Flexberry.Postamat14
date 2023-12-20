import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat14-ключ-l');
  this.route('i-i-s-postamat14-ключ-e',
  { path: 'i-i-s-postamat14-ключ-e/:id' });
  this.route('i-i-s-postamat14-ключ-e.new',
  { path: 'i-i-s-postamat14-ключ-e/new' });
  this.route('i-i-s-postamat14-логистика-l');
  this.route('i-i-s-postamat14-логистика-e',
  { path: 'i-i-s-postamat14-логистика-e/:id' });
  this.route('i-i-s-postamat14-логистика-e.new',
  { path: 'i-i-s-postamat14-логистика-e/new' });
  this.route('i-i-s-postamat14-пользователь-l');
  this.route('i-i-s-postamat14-пользователь-e',
  { path: 'i-i-s-postamat14-пользователь-e/:id' });
  this.route('i-i-s-postamat14-пользователь-e.new',
  { path: 'i-i-s-postamat14-пользователь-e/new' });
  this.route('i-i-s-postamat14-постамат-l');
  this.route('i-i-s-postamat14-постамат-e',
  { path: 'i-i-s-postamat14-постамат-e/:id' });
  this.route('i-i-s-postamat14-постамат-e.new',
  { path: 'i-i-s-postamat14-постамат-e/new' });
  this.route('i-i-s-postamat14-посылка-l');
  this.route('i-i-s-postamat14-посылка-e',
  { path: 'i-i-s-postamat14-посылка-e/:id' });
  this.route('i-i-s-postamat14-посылка-e.new',
  { path: 'i-i-s-postamat14-посылка-e/new' });
  this.route('i-i-s-postamat14-служба-доставки-l');
  this.route('i-i-s-postamat14-служба-доставки-e',
  { path: 'i-i-s-postamat14-служба-доставки-e/:id' });
  this.route('i-i-s-postamat14-служба-доставки-e.new',
  { path: 'i-i-s-postamat14-служба-доставки-e/new' });
  this.route('i-i-s-postamat14-уведомление-l');
  this.route('i-i-s-postamat14-уведомление-e',
  { path: 'i-i-s-postamat14-уведомление-e/:id' });
  this.route('i-i-s-postamat14-уведомление-e.new',
  { path: 'i-i-s-postamat14-уведомление-e/new' });
  this.route('i-i-s-postamat14-хранение-l');
  this.route('i-i-s-postamat14-хранение-e',
  { path: 'i-i-s-postamat14-хранение-e/:id' });
  this.route('i-i-s-postamat14-хранение-e.new',
  { path: 'i-i-s-postamat14-хранение-e/new' });
  this.route('i-i-s-postamat14-ячейка-l');
  this.route('i-i-s-postamat14-ячейка-e',
  { path: 'i-i-s-postamat14-ячейка-e/:id' });
  this.route('i-i-s-postamat14-ячейка-e.new',
  { path: 'i-i-s-postamat14-ячейка-e/new' });
});

export default Router;
