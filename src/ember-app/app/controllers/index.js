import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.postamat14.caption'),
          title: i18n.t('forms.application.sitemap.postamat14.title'),
          children: [{
            link: 'i-i-s-postamat14-служба-доставки-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-служба-доставки-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-служба-доставки-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-postamat14-посылка-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-посылка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-посылка-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-postamat14-ячейка-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-ячейка-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-ячейка-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-postamat14-ключ-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-ключ-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-ключ-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-postamat14-логистика-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-логистика-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-логистика-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-postamat14-пользователь-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-пользователь-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-пользователь-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-postamat14-хранение-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-хранение-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-хранение-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-postamat14-постамат-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-постамат-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-постамат-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-postamat14-уведомление-l',
            caption: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-уведомление-l.caption'),
            title: i18n.t('forms.application.sitemap.postamat14.i-i-s-postamat14-уведомление-l.title'),
            icon: 'folder open',
            children: null
          }]
        }
      ]
    };
  }),
})